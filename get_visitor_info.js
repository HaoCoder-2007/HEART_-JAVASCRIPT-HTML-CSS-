export default async function handler(request, response) {
    try {
        const ip = request.headers['x-forwarded-for']?.split(',').shift() || request.socket?.remoteAddress;

        if (!ip || ip === '::1' || ip.startsWith('192.168.') || ip.startsWith('10.') || ip.startsWith('172.')) {
            return response.status(200).json({
                ip: ip || 'localhost',
                city: 'Local',
                country_name: 'N/A',
                org: 'Local Network'
            });
        }

        const geoResponse = await fetch(`<https://ipapi.co/${ip}/json/>`);
        if (!geoResponse.ok) {
            return response.status(200).json({ ip });
        }
        const geoData = await geoResponse.json();

        return response.status(200).json(geoData);

    } catch (error) {
        console.error('Lỗi trong Serverless Function:', error);
        return response.status(500).json({ 
            error: 'Lỗi máy chủ khi lấy thông tin truy cập.',
            message: error.message 
        });
    }
}

