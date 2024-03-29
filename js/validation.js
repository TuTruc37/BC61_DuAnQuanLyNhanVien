function checkEmptyValue(value, idSpan) {
  var eleSpan = document.getElementById(idSpan);
  if (value == "") {
    eleSpan.style.display = "block";
    eleSpan.innerHTML = "Vui lòng không bỏ trống trường này";
    return false;
  } else {
    eleSpan.innerHTML = "";
    return true;
  }
}

function checkMinMaxValue(value, idSpan, min, max) {
  var eleSpan = document.getElementById(idSpan);
  var doDaiKyTu = value.length;
  if (doDaiKyTu >= min && doDaiKyTu <= max) {
    document.getElementById(idSpan).innerHTML = "";
    return true;
  } else {
    eleSpan.style.display = "block";
    eleSpan.innerHTML = `Vui lòng nhập tối thiểu ${min} ký tự và tối đa ${max} ký tự`;
    return false;
  }
}
//hàm tên nhân viên phải là chữ
function checkNameValue(value, idSpan) {
  var eleSpan = document.getElementById(idSpan);
  const regexName =
    /^[a-zA-Z\u00C0-\u00C3\u00C8-\u00CA\u00CC-\u00CD\u00D2-\u00D5\u00D9-\u00DA\u00DD\u00E0-\u00E3\u00E8-\u00EA\u00EC-\u00ED\u00F2-\u00F5\u00F9-\u00FA\u00FD\u0102-\u0103\u0110-\u0111\u0128-\u0129\u0168-\u0169\u01A0-\u01A1\u01AF-\u01B0\u1EA0-\u1EF9\s]+$/;
  var isValid = regexName.test(value);
  if (isValid) {
    eleSpan.innerHTML = "";
    return true;
  } else {
    eleSpan.style.display = "block";
    eleSpan.innerHTML = "Tên nhân viên phải là chữ";
    return false;
  }
}
function checkEmailValue(value, idSpan) {
  var eleSpan = document.getElementById(idSpan);
  const regexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  var isValid = regexEmail.test(value);
  console.log(isValid);
  if (isValid) {
    eleSpan.innerHTML = "";
    return true;
  } else {
    eleSpan.style.display = "block";
    eleSpan.innerHTML = "Email không đúng định dạng";
    return false;
  }
}
//+ mật Khẩu từ 6-10 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt), không
// để trống
function checkPasswordValue(value, idSpan) {
  var eleSpan = document.getElementById(idSpan);
  const regexPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}$/;
  var isValid = regexPassword.test(value);
  console.log(isValid);
  if (isValid) {
    eleSpan.innerHTML = "";
    return true;
  } else {
    eleSpan.style.display = "block";
    eleSpan.innerHTML =
      "mật Khẩu từ 6-10 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt)";
    return false;
  }
}

function checkDateValue(value, idSpan) {
  var eleSpan = document.getElementById(idSpan);
  const regexDate = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/;
  var isValid = regexDate.test(value);
  console.log(isValid);
  if (isValid) {
    eleSpan.innerHTML = "";
    return true;
  } else {
    eleSpan.style.display = "block";
    eleSpan.innerHTML = "Ngày tháng năm không đúng định dạng mm/dd/yyyy";
    return false;
  }
}

function checkLuongCB(value, idSpan) {
  var eleSpan = document.getElementById(idSpan);
  if (value >= 1000000 && value <= 20000000) {
    eleSpan.innerHTML = "";
    return true;
  } else {
    eleSpan.style.display = "block";
    eleSpan.innerHTML = "Lương cơ bản phải là số và từ 1 000 000 - 20 000 000";
    return false;
  }
}

function checkGioLam(value, idSpan) {
  var eleSpan = document.getElementById(idSpan);
  if (value >= 80 && value <= 200) {
    eleSpan.innerHTML = "";
    return true;
  } else {
    eleSpan.style.display = "block";
    eleSpan.innerHTML = "Giờ làm trong tháng phải là số và từ 80 - 200 giờ";
    return false;
  }
}

function removeVietnameseTones(str) {
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  str = str.replace(/đ/g, "d");
  str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
  str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
  str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
  str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
  str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
  str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
  str = str.replace(/Đ/g, "D");
  // Some system encode vietnamese combining accent as individual utf-8 characters
  // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
  str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
  str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
  // Remove extra spaces
  // Bỏ các khoảng trắng liền nhau
  str = str.replace(/ + /g, " ");
  str = str.trim();
  // Remove punctuations
  // Bỏ dấu câu, kí tự đặc biệt
  str = str.replace(
    /!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g,
    " "
  );
  return str;
}
