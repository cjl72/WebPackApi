/* global document, alert */

import TestJS from './TestJs';
import ConsoleLogIt from './ConsoleLogIt';
import getJSON from './getJSON';
import generateTableHead from './generateTableHead';
import generateTable from './generateTable';

TestJS();
getJSON('', function (data) {
  console.log(data);
});

getJSON('http://localhost:8000/api/v1/cities',
  function (err, records) {
    if (err !== null) {
      alert('Something went wrong: ' + err);
    }
    else {
      const table = document.querySelector('table');
      const data = Object.keys((records.data[0]));
      const dataRecords = records.data;

      generateTableHead(table, data);
      generateTable(table, dataRecords);
      /*
       let data = Object.keys(records.data[0]);
       generateTable(table, records.data); // generate the table first
       generateTableHead(table, data); // then the head
      */
    }

  });
ConsoleLogIt('this worked in the bundle');
