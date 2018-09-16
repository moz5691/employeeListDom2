const state = {
  opaqueFlag: false,
  titleId: document.getElementById('title-text'),
  inputId: document.getElementById('input-name'),
  officeId: document.getElementById('input-officeNum'),
  phoneId: document.getElementById('input-phoneNum'),
  inputNameField: document.getElementById('input-name-field'),
  inputOfficeField: document.getElementById('input-office-field'),
  inputPhoneField: document.getElementById('input-phone-field'),
  btnId: document.getElementById('input-btn'),

  foundEmployee: '',

  employeeList: [
    {
      name: 'Juan',
      officeNum: 304,
      phoneNum: '489-789-8789'
    },
    {
      name: 'Margie',
      officeNum: 789,
      phoneNum: '789-789-7897'
    },
    {
      name: 'Sara',
      officeNum: 32,
      phoneNum: '222-789-4654'
    },
    {
      name: 'Tyrell',
      officeNum: 3,
      phoneNum: '566-621-0452'
    },
    {
      name: 'Tasha',
      officeNum: 213,
      phoneNum: '789-766-5675'
    },
    {
      name: 'Ty',
      officeNum: 211,
      phoneNum: '789-766-7865'
    },
    {
      name: 'Sarah',
      officeNum: 345,
      phoneNum: '222-789-5231'
    }
  ],

  command: function(element) {
    element.preventDefault();
    console.log('clicked');
    let cmd = element.target.id;
    switch (cmd) {
      case 'home-menu-btn':
        home();
        break;
      case 'print-menu-btn':
        console.log('print button', state.opaqueFlag);
        printMenu();
        console.log('print button', state.opaqueFlag);
        printAll();
        break;
      case 'verify-menu-btn':
        verifyMenu();
        console.log('call verify function run here');
        break;
      case 'lookup-menu-btn':
        lookupMenu();
        console.log('call lookup function run here');
        break;
      case 'contains-menu-btn':
        containsMenu();
        console.log('call contains function run here');
        break;
      case 'update-menu-btn':
        updateMenu();
        console.log('call update function run here');
        break;
      case 'add-menu-btn':
        addMenu();
        console.log('call add function run here');
        break;
      case 'delete-menu-btn':
        deleteMenu();
        console.log('call delete function run here');
        break;
      default:
    }
  }
};

// $('a').on('click', state.command.bind(this));
$('a').on('click', state.command.bind(this));
