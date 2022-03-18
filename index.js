const cf = require('cloudflare')({
    email: 'pfd@piemadd.com',
    key: process.env['cloudflare-key']
});

(async () => {
    const records = await cf.dnsRecords;

    //57467af1f80395cc13f3b03d857d1d4d
    
    const sampleRecord = await records.add('57467af1f80395cc13f3b03d857d1d4d', {
        'name': 'trainshit.com',
        'type': 'CNAME',
        'content': 'example2.com',
        'proxied': false,
        'ttl': 1,
        'locked': false
    });
    
    console.log(sampleRecord)    
})();

/*
{
    id: 'f1cdbc24f7f6dd5879209d007904834a',
    zone_id: '21c6cdbe52329c7f3d84433250f2d2f1',
    zone_name: 'amtraker.com',
    name: 'www.amtraker.com',
    type: 'CNAME',
    content: 'cname.vercel-dns.com',
    proxiable: true,
    proxied: false,
    ttl: 1,
    locked: false,
    meta: [Object],
    created_on: '2022-01-10T01:56:49.185591Z',
    modified_on: '2022-01-10T01:56:53.96705Z'
}
*/