// title, name, office, phone
const setVisibility = function(title, name, office, phone, btn) {
  title
    ? (state.titleId.style.display = 'block')
    : (state.titleId.style.display = 'none');
  name
    ? (state.inputId.style.display = 'block')
    : (state.inputId.style.display = 'none');
  office
    ? (state.officeId.style.display = 'block')
    : (state.officeId.style.display = 'none');
  phone
    ? (state.phoneId.style.display = 'block')
    : (state.phoneId.style.display = 'none');
  btn
    ? (state.btnId.style.display = 'block')
    : (state.btnId.style.display = 'none');
};

const clearInput = function() {
  state.inputNameField.value = '';
  state.inputOfficeField.value = '';
  state.inputPhoneField.value = '';
  console.log('clear input');
};

const removeEvent = function() {
  state.btnId.removeEventListener('click', verifyEmployee);
  state.btnId.removeEventListener('click', lookupEmployee);
  state.btnId.removeEventListener('click', containsEmployee);
  state.btnId.removeEventListener('click', updateEmployee);
  state.btnId.removeEventListener('click', addEmployee);
  state.btnId.removeEventListener('click', deleteEmployee);
  console.log('remove event');
};

const render = function(foundIndex) {
  let display = '';
  display += `<p>Name: ${state.employeeList[foundIndex].name}</p><p>Office:  ${
    state.employeeList[foundIndex].officeNum
  } </p><p>Phone: ${state.employeeList[foundIndex].phoneNum} </p>`;
  $('#employee-result').html(display);
};

const render2 = function(obj) {
  // console.log('render start');
  $('#employee-result').empty();
  let display = '';
  //Array.from()
  // console.log(state.foundEmployee);
  let temp = state.foundEmployee;
  //Array.from(state.foundEmployee)
  obj.forEach(function(a) {
    display += `<h6>Name: ${a.name}</h6><h6>Office:  
    ${a.officeNum}</h6><h6>Phone: ${a.phoneNum} </h6><br>`;
    //  console.log('display', display);
  });

  $('#employee-result').html(display);
};

const backgroundToHome = function() {
  if (state.opaqueFlag === false) {
    $('#content').toggleClass('opaque');
    state.opaqueFlag = true;
  }
};

const home = function() {
  console.log('home button', state.opaqueFlag);
  setVisibility(1, 0, 0, 0, 0);
  if (state.opaqueFlag === true) {
    $('#employee-result').empty();
    $('#content').toggleClass('opaque');
    state.opaqueFlag = false;
  }
  console.log('home button', state.opaqueFlag);
};

const printMenu = function() {
  setVisibility(0, 0, 0, 0, 0);
  backgroundToHome();
};

const verifyEmployee = event => {
  console.log('verfiy callback here..');
  event.preventDefault();
  $('#employee-result').empty();
  let name = $('#input-name-field').val();
  state.foundEmployee = state.employeeList.filter(
    employee => employee.name.toLowerCase() === name.toLowerCase()
  );
  if (state.foundEmployee.length === 0) {
    $('#employee-result').append(`<h5>Not employeed.</h5>`);
  } else {
    render2(state.foundEmployee);
    // $('#employee-result').append(`<h5>Yes, the person is employeed.</h5>`);
  }
};

const verifyMenu = function() {
  backgroundToHome();

  $('#employee-result').empty();
  clearInput();
  setVisibility(0, 1, 0, 0, 1);
  removeEvent();
  state.btnId.addEventListener('click', verifyEmployee, false);
  //  state.btnId.addEventListener('click', verifyEmployee.bind(this), false);
  // $('#input-btn').on('click', this.verifyEmployee);
};

/* start ---  lookup (lookup) btn handler */
const lookupEmployee = function(event) {
  console.log('lookup callback here..');
  event.preventDefault();
  $('#employee-result').empty();
  let name = $('#input-name-field').val();
  state.foundEmployee = state.employeeList.filter(
    employee => employee.name.toLowerCase() === name.toLowerCase()
  );

  if (state.foundEmployee.length === 0) {
    $('#employee-result').append(`<h5>Name not found</h5>`);
  } else {
    render2(state.foundEmployee);
  }
};

const lookupMenu = function() {
  backgroundToHome();
  $('#employee-result').empty();
  clearInput();
  setVisibility(0, 1, 0, 0, 1);
  removeEvent();
  state.btnId.addEventListener('click', lookupEmployee, false);
  // state.btnId.addEventListener('click', lookupEmployee.bind(this), false);
  // $('#input-btn').on('click', this.lookupEmployee);
  // document.on('click', '#input-btn', lookupEmployee);
};

const containsEmployee = function(event) {
  event.preventDefault();
  console.log('contains callback here');
  const nameContains = $('#input-name-field').val();
  const listContains = state.employeeList.filter(content =>
    content.name.toLowerCase().includes(nameContains.toLowerCase())
  );
  if (
    listContains.length === 0 ||
    listContains.length === state.employeeList.length
  ) {
    $('#employee-result').append(`<h5>No name found.</h35`);
  } else {
    state.foundEmployee = listContains;
    render2(state.foundEmployee);
  }
};

const containsMenu = function() {
  backgroundToHome();
  $('#employee-result').empty();
  clearInput();
  setVisibility(0, 1, 0, 0, 1);
  //  $('#input-btn').on('click', containsEmployee);
  removeEvent();
  state.btnId.addEventListener('click', containsEmployee, false);
  // state.btnId.addEventListener('click', containsEmployee.bind(this), false);
};

const updateEmployee = function(event) {
  console.log('update callaback here..');
  event.preventDefault();
  const enteredName = $('#input-name-field').val();
  const updateIndex = state.employeeList.findIndex(element => {
    return element.name.toLowerCase() === enteredName.toLowerCase();
  });

  if (updateIndex === -1) {
    $('#employee-result').append(`<h4>No name found...</h4>`);
  } else {
    const officeNum = $('#input-office-field').val();
    const phoneNum = $('#input-phone-field').val();

    if (officeNum !== '') {
      state.employeeList[updateIndex].officeNum = officeNum;
    }
    if (phoneNum !== '') {
      state.employeeList[updateIndex].phoneNum = phoneNum;
    }
    //  state.foundEmployee = copy(JSON.stringify(state.employeeList[updateIndex]));
    console.log(state.foundEmployee);
    console.log('render here..');
    render(updateIndex);
  }
};

const updateMenu = function() {
  backgroundToHome();
  $('#employee-result').empty();
  clearInput();
  setVisibility(0, 1, 1, 1, 1);
  // $('#input-btn').on('click', this.updateEmployee);
  removeEvent();
  state.btnId.addEventListener('click', updateEmployee, false);
  // state.btnId.addEventListener('click', updateEmployee.bind(this), false);
};

const addEmployee = function(event) {
  console.log('add callback here');
  event.preventDefault();
  const addToEmployee = {
    name: $('#input-name-field').val(),
    officeNum: $('#input-office-field').val(),
    phoneNum: $('#input-phone-field').val()
  };
  state.employeeList.push(addToEmployee);
  const addedIndex = state.employeeList.length - 1;
  // state.foundEmployee = state.employeeList[addedIndex];
  console.log(addToEmployee);
  console.log(state.employeeList);
  render(addedIndex);
};

const addMenu = function() {
  backgroundToHome();
  $('#employee-result').empty();
  clearInput();
  setVisibility(0, 1, 1, 1, 1);
  //  $('#input-btn').on('click', this.addEmployee);
  removeEvent();
  state.btnId.addEventListener('click', addEmployee, false);
  // state.btnId.addEventListener('click', addEmployee.bind(this), false);
};

const deleteEmployee = function(event) {
  console.log('delete calleback here...');
  event.preventDefault();
  const name = $('#input-name-field').val();
  const result = state.employeeList.find(
    employee => employee.name.toLowerCase() === name.toLowerCase()
  );
  const removeIndex = state.employeeList.indexOf(result);
  if (removeIndex === -1) {
    $('#employee-result').append(`<h4>There is no match.</h4>`);
  } else {
    render(removeIndex);
    state.employeeList.splice(removeIndex, 1);
    $('#employee-result').append(`<h4>Deleted.</h4>`);
  }
};

const deleteMenu = function() {
  backgroundToHome();
  $('#employee-result').empty();
  clearInput();
  setVisibility(0, 1, 0, 0, 1);
  // $('#input-btn').on('click', this.deleteEmployee);
  removeEvent();
  state.btnId.addEventListener('click', deleteEmployee, false);
  //  state.btnId.addEventListener('click', deleteEmployee.bind(this), false);
};

const printAll = function() {
  render2(state.employeeList);
};
