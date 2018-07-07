// sql语句
var sqlMap = {
  // 用户
  queryAdmin: 'select * from admin where userName=? and userPassword=?',
  queryBooks: 'select * from reportory, book where reportory.bookId = book.bookId',
  queryBook: 'select * from reportory, book where reportory.bookId = book.bookId and book.bookName like ?',
  queryReportoryBook: 'select * from reportory where bookId=? and count>=?',
  saleBook: 'update reportory set count=count-? where bookId=?',
  insertSaleRecord: 'insert into saleTable values(?, ?, ?, ?, ?)',
  querySaleRecord: 'select * from saleTable where bookId=? and customerName=? and saleCount-? >= (select ifnull(sum(returnCount),0) from returnTable where  bookId=? and customerName=?)',
  insertReturnRecord: 'insert into returnTable values(?, ?, ?, ?, ?)',
  querySaleRecordByTime: 'select *, (saleCount * price) as sale from saleTable, book, reportory where book.bookId = saleTable.bookId and reportory.bookId = book.bookId and Date(saleTime) >= ? and Date(saleTime) <= ?',
  queryPurchaseTableByTime: 'select * , (purchaseCount * qPrice) as pray from purchasetable, book, provider, quotedprice where provider.providerId = purchasetable.providerId and provider.providerId = quotedprice.providerId and Date(purchaseTime) >= ? and Date(purchaseTime) <= ? and purchasetable.bookId = book.bookId and quotedprice.bookId = book.bookId',
  queryReturnRecordByTime: 'select *, (returnCount * price) as ret from returnTable, book, reportory where book.bookId = returnTable.bookId and reportory.bookId = book.bookId and Date(returnTime) >= ? and Date(returnTime) <= ?',
  queryProviderInfo: 'select * from provider, quotedPrice, book where provider.providerId = quotedPrice.providerId and quotedPrice.bookId = book.bookId',
  queryIsOwnBook: 'select * from reportory where reportory.bookId = ?',
  updateBookNum: 'update reportory set count = ? where bookId = ?',
  purchaseBook: 'insert into purchaseTable values(?, ?, ?, ?, ?)',
  updateBookPrice: 'update reportory set price = ? where bookId = ?',
  insertReportory: 'insert reportory values(?, ?, ?)'
}

module.exports = sqlMap
