function parserMethod(data: any, ex: string) {
  return parseFloat(data).toFixed(ex == "CDS" || ex == "BCD" ? 4 : 2);
}

function ruppesFormat(num: any, isparse: boolean, isAboslute: boolean) {
  var n1, n2;
  num = Number(num);
  num ? "" : (num = 0);
  if (isAboslute) {
    num = parseFloat(num) + "" || "";
  } else {
    num = parseFloat(num).toFixed(isparse ? 4 : 2) + "" || "";
  }
  // works for integer and floating as well
  n1 = num.split(".");
  n2 = n1[1] || null;
  n1 = n1[0].replace(/(\d)(?=(\d\d)+\d$)/g, "$1,");
  num = n2 ? n1 + "." + n2 : n1;

  return num;
}
function getIsParse(exchange: any) {
  if (exchange == "CDS" || exchange == "BCD") {
    return true;
  } else {
    return false;
  }
}
function chgOtherQty(item: any, key: any) {
  var qty: any = 0;
  if (item && item[key]) {
    if (item.exchange == "MCX") {
      qty = Number(item[key]) / Number(item.bqty);
    } else {
      qty = item[key];
    }
  }

  return qty;
}
function chgQty(item: any) {
  if (item.exchange == "MCX") {
    var qty: any = Number(item.qty) / Number(item.bqty);
  } else {
    var qty: any = item.qty;
  }
  return qty;
}
function getFormattedQty(tempQty: any, multiplier: any) {
  return Number(tempQty) / Number(multiplier);
}
function numDifferentiation(value: any) {
  value ? "" : (value = 0);

  const val = Math.abs(value);
  if (val >= 10000000) return `${(value / 10000000).toFixed(2)} Cr`;
  if (val >= 100000) return `${(value / 100000).toFixed(2)} L`;
  if (val >= 10000) return `${(value / 10000).toFixed(2)} K`;
  if (val >= 1000) return `${(value / 1000).toFixed(2)} K`;

  return ruppesFormat(val, false, true);
}

function numAMCDifferentiation(data: any) {
  let value = data.halfyear_asset - data.quarterly_asset;
  value ? "" : (value = 0);
  data.rise_value = value;
  // const val = Math.abs(value)
  if (value >= 10000000) return `${(value / 10000000).toFixed(2)} Cr`;
  if (value >= 100000) return `${(value / 100000).toFixed(2)} L`;
  if (value >= 10000) return `${(value / 10000).toFixed(2)} K`;
  if (value >= 1000) return `${(value / 1000).toFixed(2)} K`;
  if (value < 1000) return value.toFixed(2);

  return 0;
}

function formateDate(date: any, type: any) {
  const currentDate = new Date(date);
  const isoDateString = currentDate.toISOString().split("T")[0];
  let formattedDate;
  const [year, month, day] = isoDateString.split("-");
  if (type == "year") {
    formattedDate = `${year}-${month}-${day}`;
  } else {
    formattedDate = `${day}/${month}/${year}`;
  }

  return formattedDate;
}

const formatter = {
  parse: parserMethod,
  ruppesFormat: ruppesFormat,
  chgQty: chgQty,
  numDifferentiation: numDifferentiation,
  numAMCDifferentiation: numAMCDifferentiation,
  formateDate: formateDate,
  getFormattedQty: getFormattedQty,
  getIsParse: getIsParse,
  chgOtherQty: chgOtherQty,
};

export default formatter;
