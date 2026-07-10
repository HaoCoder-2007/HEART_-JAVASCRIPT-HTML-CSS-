const { GoogleGenerativeAI } = require("@google/generative-ai");

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    if (!process.env.GEMINI_API_KEY) {
      console.error("GEMINI_API_KEY is not set in environment variables on Vercel.");
      return res.status(500).json({ error: 'API Key của dịch vụ AI chưa được cấu hình trên server.' });
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });

    const { command, playlistNames } = req.body;

    if (!command) {
      return res.status(400).json({ error: 'Command is required' });
    }

    const prompt = `
      Bạn là một trợ lý AI cho một trình phát nhạc.
      Nhiệm vụ của bạn là phân tích yêu cầu của người dùng và chuyển nó thành một đối tượng JSON có cấu trúc.
      Người dùng sẽ nói bằng tiếng Việt.

      Các hành động (action) có thể có:
      - "play": Phát nhạc.
      - "pause": Dừng nhạc.
      - "next_song": Chuyển bài hát tiếp theo.
      - "prev_song": Quay lại bài hát trước đó.
      - "set_volume": Đặt âm lượng. Yêu cầu một giá trị 'value' từ 0 đến 100.
      - "increase_volume": Tăng âm lượng.
      - "decrease_volume": Giảm âm lượng.
      - "mute": Tắt tiếng (đặt âm lượng về 0).
      - "change_playlist": Đổi playlist. Yêu cầu một giá trị 'value' là tên của playlist.
      - "unknown": Nếu không hiểu lệnh.

      Danh sách các playlist hiện có: ${JSON.stringify(playlistNames)}. Hãy cố gắng khớp lệnh của người dùng với một trong những tên này. Ví dụ, nếu người dùng nói "mở nhạc us uk", bạn nên khớp với "nhạc us-uk". Nếu người dùng nói "mở album giáng sinh", bạn nên khớp với "Giáng sinh".

      Ví dụ:
      - Người dùng: "dừng nhạc lại" -> {"action": "pause"}
      - Người dùng: "bài tiếp theo đi" -> {"action": "next_song"}
      - Người dùng: "âm lượng 50 phần trăm" -> {"action": "set_volume", "value": 50}
      - Người dùng: "cho to lên" -> {"action": "increase_volume"}
      - Người dùng: "mở playlist nhạc việt" -> {"action": "change_playlist", "value": "Nhạc Việt"}
      - Người dùng: "chuyển sang album tết" -> {"action": "change_playlist", "value": "Tết"}
      - Người dùng: "bla bla bla" -> {"action": "unknown", "command": "bla bla bla"}

      Chỉ trả về duy nhất một đối tượng JSON, không có giải thích hay bất kỳ văn bản nào khác.

      Yêu cầu của người dùng: "${command}"
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    console.log("Raw response from Gemini:", text);

    const jsonString = text.replace(/```json/g, '').replace(/```/g, '').trim();

    try {
      const actionObject = JSON.parse(jsonString);
      res.status(200).json(actionObject);
    } catch (parseError) {
      console.error("Lỗi phân tích JSON từ Gemini:", parseError);
      console.error("Chuỗi JSON không hợp lệ:", jsonString);
      res.status(500).json({ error: 'Phản hồi từ AI không hợp lệ. Vui lòng thử lại.' });
    }

  } catch (error) {
    console.error('Lỗi trong serverless function (api/ai.js):', error);
    res.status(500).json({ error: 'Có lỗi xảy ra khi gọi dịch vụ AI.' });
  }
};
