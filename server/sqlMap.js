// sql语句
var sqlMap = {
  // 用户
  queryAdmin: 'select * from admin where userName=? and userPassword=?',
<<<<<<< HEAD
  queryBooks: 'select * from book',
  queryBook: 'select * from book where bookName like ?',
  querySaleBook: 'select * from book where bookId=? and bookNum>=?',
  saleBook: 'update reportory set count=count-? where bookId=?',
  insertSaleRecord: 'insert into saleTable values(?, ?, ?, ?)',
  querySaleRecord: 'select * from saleTable where bookId=? and customerName=? and saleCount>=?',
  insertReturnRecord: 'insert into returnTable values(?, ?, ?, ?)',
  querySaleRecordByTime: 'select * , sum(saleCount * price) as totalIn from saleTable, book, reportory where book.bookId = saleTable.bookId and reportory.bookId = book.bookId and saleTime >= ? and saleTime <= ?',
  querypurchaseTableByTime: 'select * , sum(purchaseCount * qPrice) as totalOut from purchasetable, book, provider, quotedprice where provider.providerId = purchasetable.providerId and provider.providerId = quotedprice.providerId and purchaseTime >= ? and purchaseTime <= ? and purchasetable.bookId = book.bookId and quotedprice.bookId = book.bookId',
  queryProviderInfo: 'select * from provider, quotedPrice, book where provider.providerId = quotedPrice.providerId and quotedPrice.bookId = book.bookId',
  queryIsOwnBook: 'select * from reportory where reportory.bookId == ?',
  updateBookNum: 'update book set bookNum = ? where bookId = ?',
  purchaseBook: 'insert into purchaseTable values(?, ?, ?, ?)',
  updateBookPrice: 'update reportory set price = ? where bookId = ?'
=======
  queryBooks: 'select * from reportory, book where reportory.bookId = book.bookId',
  queryBook: 'select * from reportory, book where reportory.bookId = book.bookId and book.bookName like ?',
  queryReportoryBook: 'select * from reportory where bookId=? and count>=?',
  saleBook: 'update reportory set count=count-? where bookId=?',
  insertSaleRecord: 'insert into saleTable values(?, ?, ?, ?, ?)',
  querySaleRecord: 'select * from saleTable where bookId=? and customerName=? and saleCount>=?',
  insertReturnRecord: 'insert into returnTable values(?, ?, ?, ?, ?)',
  querySaleRecordByTime: 'select * , sum(saleCount * price) as totalIn from saleTable, book, reportory where book.bookId = saleTable.bookId and reportory.bookId = book.bookId and Date(saleTime) >= ? and Date(saleTime) <= ?',
  querypurchaseTableByTime: 'select * , (purchaseCount * qPrice) as pray from purchasetable, book, provider, quotedprice where provider.providerId = purchasetable.providerId and provider.providerId = quotedprice.providerId and Date(purchaseTime) >= ? and Date(purchaseTime) <= ? and purchasetable.bookId = book.bookId and quotedprice.bookId = book.bookId',
  queryProviderInfo: 'select * from provider, quotedPrice, book where provider.providerId = quotedPrice.providerId and quotedPrice.bookId = book.bookId',
  queryIsOwnBook: 'select * from reportory where reportory.bookId = ?',
  updateBookNum: 'update reportory set count = ? where bookId = ?',
  purchaseBook: 'insert into purchaseTable values(?, ?, ?, ?, ?)',
  updateBookPrice: 'update reportory set price = ? where bookId = ?',
  insertReportory: 'insert reportory values(?, ?, ?)'
>>>>>>> refs/remotes/origin/master
}

module.exports = sqlMap
