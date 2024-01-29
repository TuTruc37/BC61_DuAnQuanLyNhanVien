var arrNhanVien = [];
//thêm nhân viên đã hiển thị ở console
function addNhanVien() {
  var arrInput = document.querySelectorAll("#myModal input,#myModal select");
  console.log(arrInput);
  var nhanVien = new NhanVien();
  for (var i = 0; i < arrInput.length; i++) {
    console.log(arrInput[i].value);
    var id = arrInput[i].id;
    nhanVien[id] = arrInput[i].value;
  }
  var isValid = true;
  isValid &=
    checkEmptyValue(nhanVien.tknv, "tbTKNV") &&
    checkMinMaxValue(nhanVien.tknv, "tbTKNV", 1, 6);

  isValid &=
    checkEmptyValue(nhanVien.name, "tbTen") &&
    checkNameValue(nhanVien.name, "tbTen");
  isValid &=
    checkEmptyValue(nhanVien.email, "tbEmail") &&
    checkEmailValue(nhanVien.email, "tbEmail");
  isValid &=
    checkEmptyValue(nhanVien.password, "tbMatKhau") &&
    checkPasswordValue(nhanVien.password, "tbMatKhau");
  isValid &=
    checkEmptyValue(nhanVien.datepicker, "tbNgay") &&
    checkDateValue(nhanVien.datepicker, "tbNgay");
  isValid &=
    checkEmptyValue(nhanVien.luongCB, "tbLuongCB") &&
    checkLuongCB(nhanVien.luongCB, "tbLuongCB");
  isValid &= checkEmptyValue(nhanVien.chucvu, "tbChucVu");
  isValid &=
    checkEmptyValue(nhanVien.gioLam, "tbGiolam") &&
    checkGioLam(nhanVien.gioLam, "tbGiolam");
  if (isValid) {
    return nhanVien;
  }
}

document.getElementById("btnThemNV").onclick = function () {
  var nhanVien = addNhanVien();
  if (nhanVien) {
    arrNhanVien.push(nhanVien);
    console.log(arrNhanVien);
    saveLocalStorage("arrNhanVien", arrNhanVien);
    renderNhanVien();
    document.querySelector("#myModal form").reset();
  }
};
//hiển thị dữ liệu lên giao diện người dùng
function renderNhanVien(arr) {
  console.log(arr);
  if (!arr) {
    arr = arrNhanVien;
  }
  var content = "";
  for (var i = 0; i < arr.length; i++) {
    var nhanVien = arr[i];
    var newNhanVien = new NhanVien();
    Object.assign(newNhanVien, nhanVien);
    console.log(newNhanVien);
    var stringHtml = `<tr>
    <td>${newNhanVien.tknv}</td>
    <td>${newNhanVien.name}</td>
    <td>${newNhanVien.email}</td>
    <td>${newNhanVien.datepicker}</td>
    <td>${newNhanVien.chucvu}</td>
    <td>${newNhanVien.tinhTongLuong()}</td>
    <td>${newNhanVien.xepLoaiNhanVien()}</td>
    <td style="display:flex; border:none">
    <button onclick = "deleteNhanVien('${
      newNhanVien.tknv
    }')" class = "btn btn-danger">Xoá</button>
    <button onclick = "getInfoNhanVien('${
      newNhanVien.tknv
    }')" class = "btn btn-warning ml-2" data-toggle="modal"
    data-target="#myModal">Sửa</button>
    </td>
    </tr>`;
    content += stringHtml;
  }
  document.getElementById("tableDanhSach").innerHTML = content;
  console.log(content);
}

// Lưu trữ dữ liệu vào localStorage
function saveLocalStorage(key, value) {
  var stringJson = JSON.stringify(value);
  localStorage.setItem(key, stringJson);
}
//Lấy dữ liệu từ localStorage
function getLocalStorage(key) {
  var dataLocal = localStorage.getItem(key);
  if (dataLocal) {
    var newData = JSON.parse(dataLocal);
    console.log(newData);
    arrNhanVien = newData;
    renderNhanVien();
  }
}
getLocalStorage("arrNhanVien");

//Hàm giúp xoá dữ liệu nhân viên
function deleteNhanVien(tt) {
  for (var i = 0; i < arrNhanVien.length; i++) {
    if (arrNhanVien[i].tknv == tt) {
      arrNhanVien.splice(i, 1);
      break;
    }
  }
  saveLocalStorage("arrNhanVien", arrNhanVien);
  renderNhanVien();
}

//Hàm giúp sửa dữ liệu nhân viên

function getInfoNhanVien(tt) {
  console.log(tt);
  var nhanVien;
  for (var i = 0; i < arrNhanVien.length; i++) {
    if (arrNhanVien[i].tknv == tt) {
      nhanVien = arrNhanVien[i];
    }
  }
  console.log(nhanVien);
  var arrInput = document.querySelectorAll("#myModal input,#myModal select");
  for (var j = 0; j < arrInput.length; j++) {
    console.log(arrInput[j]);
    var id = arrInput[j].id;
    arrInput[j].value = nhanVien[id];
  }
  document.getElementById("tknv").readOnly = true;
  document.getElementById("btnThemNV").disabled = true;
}

function updateNhanVien() {
  var nhanVien = addNhanVien();
  if (nhanVien) {
    for (var i = 0; i < arrNhanVien.length; i++) {
      var nhanVienTrongMang = arrNhanVien[i];
      if (nhanVien.tknv == nhanVienTrongMang.tknv) {
        arrNhanVien[i] = nhanVien;
      }
    }
    console.log(arrNhanVien);
    renderNhanVien();
    saveLocalStorage("arrNhanVien", arrNhanVien);
    document.getElementById("tknv").readOnly = false;
    document.getElementById("btnThemNV").disabled = false;
    document.querySelector("#myModal form").reset();
  }
}
document.getElementById("btnCapNhat").onclick = updateNhanVien;

function searchNhanVien(event) {
  var valueUser = event.target.value;
  console.log(valueUser);
  var keyword = valueUser.trim().toLowerCase();
  var newKeyword = removeVietnameseTones(keyword);
  console.log(newKeyword);
  var arrNhanVienFilter = [];
  console.log(arrNhanVien);
  for (var i = 0; i < arrNhanVien.length; i++) {
    console.log(arrNhanVien[i]);
    var nhanVien = arrNhanVien[i];
    var newNhanVien = new NhanVien();
    Object.assign(newNhanVien, nhanVien);
    var newTenNhanVien = removeVietnameseTones(
      newNhanVien.xepLoaiNhanVien().trim().toLowerCase()
    );
    if (newTenNhanVien.includes(newKeyword)) {
      arrNhanVienFilter.push(newNhanVien);
    }
  }
  renderNhanVien(arrNhanVienFilter);
  console.log(arrNhanVienFilter);
}
