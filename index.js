var virtualData = [];
function dataSource() {
    var names = ['VINET', 'TOMSP', 'HANAR', 'VICTE', 'SUPRD', 'HANAR', 'CHOPS', 'RICSU', 'WELLI','HILAA', 'ERNSH', 'CENTC',
        'OTTIK', 'QUEDE', 'RATTC', 'ERNSH', 'FOLKO', 'BLONP', 'WARTH', 'FRANK', 'GROSR', 'WHITC', 'WARTH', 'SPLIR', 'RATTC', 'QUICK', 'VINET',
        'MAGAA', 'TORTU', 'MORGK', 'BERGS', 'LEHMS', 'BERGS', 'ROMEY', 'ROMEY', 'LILAS', 'LEHMS', 'QUICK', 'QUICK', 'RICAR', 'REGGC', 'BSBEV',
        'COMMI', 'QUEDE', 'TRADH', 'TORTU', 'RATTC', 'VINET', 'LILAS', 'BLONP', 'HUNGO', 'RICAR', 'MAGAA', 'WANDK', 'SUPRD', 'GODOS', 'TORTU',
        'OLDWO', 'ROMEY', 'LONEP', 'ANATR', 'HUNGO', 'THEBI', 'DUMON', 'WANDK', 'QUICK', 'RATTC', 'ISLAT', 'RATTC', 'LONEP', 'ISLAT', 'TORTU',
        'WARTH', 'ISLAT', 'PERIC', 'KOENE', 'SAVEA', 'KOENE', 'BOLID', 'FOLKO', 'FURIB', 'SPLIR', 'LILAS', 'BONAP', 'MEREP', 'WARTH', 'VICTE',
        'HUNGO', 'PRINI', 'FRANK', 'OLDWO', 'MEREP', 'BONAP', 'SIMOB', 'FRANK', 'LEHMS', 'WHITC', 'QUICK', 'RATTC', 'FAMIA'];
    var sport = ['Cricket', 'Football', 'Tennis', 'Golf', 'Chess', 'Dodgeball', 'Racket', 'Archery', 'Climbing', 'Hunting', 'Carrom', 'Tag', 'Novuss',
        'Subbuteo', 'Baseball', 'Madden NFL', 'Shuffleboard', 'Badminton', 'Hockey', 'Volleyball', 'Table Tennis', 'Golf', 'Cycling', 'Running', 'Walking', 'Wireball',
        'Town ball', 'Tee ball', 'Stool ball', 'Stick ball'];
    var country = ['India', 'Australia', 'Ballesteros', 'Belgium', 'Brazil', 'England', 'Ethiopia', 'Finland', 'France', 'Germany', 'Britain',
        'Argentina', 'Jamaica', 'Kenya', 'Morocco', 'Ireland', 'Norway', 'Philippines', 'Portugal', 'Romania', 'Russia', 'Scotland', 'Scottish', 'Serbia', 'Spain',
        'Sweden', 'Switzerland', 'Netherlands', 'UK', 'Ukraine', 'US', 'Wales', 'West Indies', 'China', 'Hong Kong', 'Italy', 'Philippines', 'Turkey', 'Botswana',
        'Sri Lanka', 'Algeria', 'Bangladesh', 'Egypt', 'Malaysia'];
    for (var i = 0; i < 100000; i++) {
        virtualData.push({
            'SNo': i + 1,
            'FIELD1': names[Math.floor(Math.random() * names.length)],
            'FIELD2': 1967 + (i % 10),
            'FIELD3': sport[Math.floor(Math.random() * sport.length)],
            'FIELD4': country[Math.floor(Math.random() * country.length)],
            'FIELD5': Math.floor(Math.random() * 2000),
            'FIELD6': Math.floor(Math.random() * 1000),
            'FIELD7': Math.floor(Math.random() * 100),
            'FIELD8': Math.floor(Math.random() * 10),
            'FIELD9': Math.floor(Math.random() * 10),
            'FIELD10': Math.floor(Math.random() * 100),
            'FIELD11': Math.floor(Math.random() * 100),
            'FIELD12': Math.floor(Math.random() * 1000),
            'FIELD13': Math.floor(Math.random() * 10),
            'FIELD14': Math.floor(Math.random() * 10),
            'FIELD15': Math.floor(Math.random() * 1000),
            'FIELD16': Math.floor(Math.random() * 200),
            'FIELD17': Math.floor(Math.random() * 300),
            'FIELD18': Math.floor(Math.random() * 400),
            'FIELD19': Math.floor(Math.random() * 500),
            'FIELD20': Math.floor(Math.random() * 700),
            'FIELD21': Math.floor(Math.random() * 800),
            'FIELD22': Math.floor(Math.random() * 1000),
            'FIELD23': Math.floor(Math.random() * 2000),
            'FIELD24': Math.floor(Math.random() * 150),
            'FIELD25': Math.floor(Math.random() * 1000),
            'FIELD26': Math.floor(Math.random() * 100),
            'FIELD27': Math.floor(Math.random() * 400),
            'FIELD28': Math.floor(Math.random() * 600),
            'FIELD29': Math.floor(Math.random() * 500),
            'FIELD30': Math.floor(Math.random() * 300),
        });
    }
};
dataSource();

var virtualColumn = [
        { field: 'SNo', headerText: 'SNo', width: 120, textAlign: 'Right', isPrimaryKey: true },
        { field: 'FIELD1', headerText: 'Player Name' },
        { field: 'FIELD2', headerText: 'Year', width: 120, textAlign: 'Right' },
        { field: 'FIELD3', headerText: 'Stint', width: 120, textAlign: 'Right' },
        { field: 'FIELD4', headerText: 'TMID', width: 120, textAlign: 'Right' },
        { field: 'FIELD5', headerText: 'LGID', width: 120, textAlign: 'Right' },
        { field: 'FIELD6', headerText: 'GP', width: 120, textAlign: 'Right' },
        { field: 'FIELD7', headerText: 'GS', width: 120, textAlign: 'Right' },
        { field: 'FIELD8', headerText: 'Minutes', width: 120, textAlign: 'Right' },
        { field: 'FIELD9', headerText: 'Points', width: 120, textAlign: 'Right' },
        { field: 'FIELD10', headerText: 'oRebounds', width: 130, textAlign: 'Right' },
        { field: 'FIELD11', headerText: 'dRebounds', width: 130, textAlign: 'Right' },
        { field: 'FIELD12', headerText: 'Rebounds', width: 120, textAlign: 'Right' },
        { field: 'FIELD13', headerText: 'Assists', width: 120, textAlign: 'Right' },
        { field: 'FIELD14', headerText: 'Steals', width: 120, textAlign: 'Right' },
        { field: 'FIELD15', headerText: 'Blocks', width: 120, textAlign: 'Right' },
        { field: 'FIELD16', headerText: 'Turnovers', width: 130, textAlign: 'Right' },
        { field: 'FIELD17', headerText: 'PF', width: 130, textAlign: 'Right' },
        { field: 'FIELD18', headerText: 'fgAttempted', width: 150, textAlign: 'Right' },
        { field: 'FIELD19', headerText: 'fgMade', width: 120, textAlign: 'Right' },
        { field: 'FIELD20', headerText: 'ftAttempted', width: 150, textAlign: 'Right' },
        { field: 'FIELD21', headerText: 'ftMade', width: 120, textAlign: 'Right' },
        { field: 'FIELD22', headerText: 'ThreeAttempted', width: 150, textAlign: 'Right' },
        { field: 'FIELD23', headerText: 'ThreeMade', width: 130, textAlign: 'Right' },
        { field: 'FIELD24', headerText: 'PostGP', width: 120, textAlign: 'Right' },
        { field: 'FIELD25', headerText: 'PostGS', width: 120, textAlign: 'Right' },
        { field: 'FIELD26', headerText: 'PostMinutes', width: 120, textAlign: 'Right' },
        { field: 'FIELD27', headerText: 'PostPoints', width: 130, textAlign: 'Right' },
        { field: 'FIELD28', headerText: 'PostoRebounds', width: 130, textAlign: 'Right' },
        { field: 'FIELD29', headerText: 'PostdRebounds', width: 130, textAlign: 'Right' },
        { field: 'FIELD30', headerText: 'PostRebounds', width: 130, textAlign: 'Right' },
  ];

  var column =[
            { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 180, isPrimaryKey: true, validationRules: { required: true, number: true }},
            { field: 'CustomerName', headerText: 'Customer Name', width: 150, validationRules: { required: true, minLength: 5 } },
            { field: 'OrderDate', headerText: 'Order Date', width: 130, format: 'yMd', textAlign: 'Right', editType: 'datepickeredit' },
            { field: 'Freight', width: 160, format: 'C2', textAlign: 'Right', editType: 'numericedit', validationRules: { required: true, min: 0 } },
            { field: 'ShippedDate', headerText: 'Shipped Date', width: 140, format: 'yMd', textAlign: 'Right', editType: 'datepickeredit' },
            { field: 'ShipCountry', headerText: 'Ship Country', width: 140, editType: 'dropdownedit' }
        ];

var grid = new ej.grids.Grid({
  dataSource: window.orderData,
  height: '60vh',
  width: '80vw',
  allowFiltering: true,
  toolbar: ['Search', 'Add', 'Edit', 'Delete', 'Update', 'Cancel'],
  editSettings: { allowAdding: true, allowEditing: true, allowDeleting: true},
  columns: column
});

grid.appendTo('#Grid');

var radiobutton = new ej.buttons.RadioButton({ label: 'Default', name: 'default', checked: true, change: onChange });
radiobutton.appendTo('#default');

radiobutton = new ej.buttons.RadioButton({ label: 'Paging', name: 'default', change: onChange });
radiobutton.appendTo('#paging');

radiobutton = new ej.buttons.RadioButton({ label: 'Virtual Scrolling', name: 'default', change: onChange });
radiobutton.appendTo('#virtual');

radiobutton = new ej.buttons.RadioButton({ label: 'Infinite Scrolling', name: 'default', change: onChange });
radiobutton.appendTo('#infinite');

function onChange(args) { 
   if (args.event.target.id === 'default') {
        grid.enableVirtualization = false;
        grid.enableInfiniteScrolling = false;
        grid.allowPaging = false;
        grid.changeDataSource(window.orderData, column);
    } else if (args.event.target.id === 'paging') {
        grid.enableVirtualization = false;
        grid.enableInfiniteScrolling = false;
        grid.allowPaging = true;
        grid.changeDataSource(window.orderData, column);
    } else if (args.event.target.id === 'virtual') {
        grid.enableVirtualization = true;
        grid.enableInfiniteScrolling = false;
        grid.enableColumnVirtualization = true;
        grid.allowPaging = false;
        grid.changeDataSource(virtualData, virtualColumn);
    } else if (args.event.target.id === 'infinite') {
        grid.enableVirtualization = false;
        grid.enableInfiniteScrolling = true;
        grid.allowPaging = false;
        grid.changeDataSource(virtualData, virtualColumn);
    }
}

var heightData = [
    { id: '50vh', type: '50vh' },
    { id: '60vh', type: '60vh' },
    { id: '70vh', type: '70vh' },
    { id: '80vh', type: '80vh' },
    { id: '90vh', type: '90vh' },
    { id: '100vh', type: '100vh' },
];

var heightValue = new ej.dropdowns.DropDownList({
    dataSource: heightData,
    fields: { text: 'type', value: 'id' },
    value: '60vh',
    change: function (e) {
        if (heightValue.value) {
            grid.height = heightValue.value;
        }
    },
});
heightValue.appendTo('#height');

var widthData = [
    { id: '40vw', type: '40vw' },
    { id: '50vw', type: '50vw' },
    { id: '60vw', type: '60vw' },
    { id: '70vw', type: '70vw' },
    { id: '80vw', type: '80vw' },
];

var widthValue = new ej.dropdowns.DropDownList({
    dataSource: widthData,
    fields: { text: 'type', value: 'id' },
    value: '80vw',
    change: function (e) {
        if (widthValue.value) {
            grid.width = widthValue.value;
        }
    },
});
widthValue.appendTo('#width');


const filter = new ej.buttons.CheckBox({
    checked: true,
    change: function (args) {
        grid.allowFiltering = args.checked;
        grid.freezeRefresh();
    }
});
filter.appendTo('#filter');


const group = new ej.buttons.CheckBox({
    change: function (args) {
        grid.allowGrouping = args.checked;
        grid.freezeRefresh();
    }
});
group.appendTo('#group');