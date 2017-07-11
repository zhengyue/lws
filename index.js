const cheerio = require('cheerio');
var request = require('request');

request.post({
  url:'http://www.dce.com.cn/publicweb/quotesdata/wbillWeeklyQuotes.html',
  body: 'wbillWeeklyQuotes.variety=all&year=2017&month=6&day=03'
  }, function(err,httpResponse,body){
    if(err) {
      return console.error('ERROR!', err);
    }

    // console.log(body);
    const $ = cheerio.load(body, {decodeEntities: false});

    var data = $('#printData tbody tr').get().map(function(row) {
      return $(row).find('td').get().map(function(cell) {
        return $(cell).text().trim();
      });
    });

    console.dir(data);

  });
