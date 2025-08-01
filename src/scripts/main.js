'use strict';

const people = [
  {
    name: 'Carolus Haverbeke',
    sex: 'm',
    born: 1832,
    died: 1905,
    fatherName: 'Carel Haverbeke',
    motherName: 'Maria van Brussel',
    slug: 'carolus-haverbeke-1832',
  },
  {
    name: 'Emma de Milliano',
    sex: 'f',
    born: 1876,
    died: 1956,
    fatherName: 'Petrus de Milliano',
    motherName: 'Sophia van Damme',
    slug: 'emma-de-milliano-1876',
  },
  {
    name: 'Maria de Rycke',
    sex: 'f',
    born: 1683,
    died: 1724,
    fatherName: 'Frederik de Rycke',
    motherName: 'Laurentia van Vlaenderen',
    slug: 'maria-de-rycke-1683',
  },
  {
    name: 'Jan van Brussel',
    sex: 'm',
    born: 1714,
    died: 1748,
    fatherName: 'Jacobus van Brussel',
    motherName: 'Joanna van Rooten',
    slug: 'jan-van-brussel-1714',
  },
  {
    name: 'Philibert Haverbeke',
    sex: 'm',
    born: 1907,
    died: 1997,
    fatherName: 'Emile Haverbeke',
    motherName: 'Emma de Milliano',
    slug: 'philibert-haverbeke-1907',
  },
  {
    name: 'Jan Frans van Brussel',
    sex: 'm',
    born: 1761,
    died: 1833,
    fatherName: 'Jacobus Bernardus van Brussel',
    motherName: null,
    slug: 'jan-frans-van-brussel-1761',
  },
  {
    name: 'Pauwels van Haverbeke',
    sex: 'm',
    born: 1535,
    died: 1582,
    fatherName: 'N. van Haverbeke',
    motherName: null,
    slug: 'pauwels-van-haverbeke-1535',
  },
  {
    name: 'Clara Aernoudts',
    sex: 'f',
    born: 1918,
    died: 2012,
    fatherName: 'Henry Aernoudts',
    motherName: 'Sidonie Coene',
    slug: 'clara-aernoudts-1918',
  },
  {
    name: 'Emile Haverbeke',
    sex: 'm',
    born: 1877,
    died: 1968,
    fatherName: 'Carolus Haverbeke',
    motherName: 'Maria Sturm',
    slug: 'emile-haverbeke-1877',
  },
  {
    name: 'Lieven de Causmaecker',
    sex: 'm',
    born: 1696,
    died: 1724,
    fatherName: 'Carel de Causmaecker',
    motherName: 'Joanna Claes',
    slug: 'lieven-de-causmaecker-1696',
  },
  {
    name: 'Pieter Haverbeke',
    sex: 'm',
    born: 1602,
    died: 1642,
    fatherName: 'Lieven van Haverbeke',
    motherName: null,
    slug: 'pieter-haverbeke-1602',
  },
  {
    name: 'Livina Haverbeke',
    sex: 'f',
    born: 1692,
    died: 1743,
    fatherName: 'Daniel Haverbeke',
    motherName: 'Joanna de Pape',
    slug: 'livina-haverbeke-1692',
  },
  {
    name: 'Pieter Bernard Haverbeke',
    sex: 'm',
    born: 1695,
    died: 1762,
    fatherName: 'Willem Haverbeke',
    motherName: 'Petronella Wauters',
    slug: 'pieter-bernard-haverbeke-1695',
  },
  {
    name: 'Lieven van Haverbeke',
    sex: 'm',
    born: 1570,
    died: 1636,
    fatherName: 'Pauwels van Haverbeke',
    motherName: 'Lievijne Jans',
    slug: 'lieven-van-haverbeke-1570',
  },
  {
    name: 'Joanna de Causmaecker',
    sex: 'f',
    born: 1762,
    died: 1807,
    fatherName: 'Bernardus de Causmaecker',
    motherName: null,
    slug: 'joanna-de-causmaecker-1762',
  },
  {
    name: 'Willem Haverbeke',
    sex: 'm',
    born: 1668,
    died: 1731,
    fatherName: 'Lieven Haverbeke',
    motherName: 'Elisabeth Hercke',
    slug: 'willem-haverbeke-1668',
  },
  {
    name: 'Pieter Antone Haverbeke',
    sex: 'm',
    born: 1753,
    died: 1798,
    fatherName: 'Jan Francies Haverbeke',
    motherName: 'Petronella de Decker',
    slug: 'pieter-antone-haverbeke-1753',
  },
  {
    name: 'Maria van Brussel',
    sex: 'f',
    born: 1801,
    died: 1834,
    fatherName: 'Jan Frans van Brussel',
    motherName: 'Joanna de Causmaecker',
    slug: 'maria-van-brussel-1801',
  },
  {
    name: 'Angela Haverbeke',
    sex: 'f',
    born: 1728,
    died: 1734,
    fatherName: 'Pieter Bernard Haverbeke',
    motherName: 'Livina de Vrieze',
    slug: 'angela-haverbeke-1728',
  },
  {
    name: 'Elisabeth Haverbeke',
    sex: 'f',
    born: 1711,
    died: 1754,
    fatherName: 'Jan Haverbeke',
    motherName: 'Maria de Rycke',
    slug: 'elisabeth-haverbeke-1711',
  },
  {
    name: 'Lievijne Jans',
    sex: 'f',
    born: 1542,
    died: 1582,
    fatherName: null,
    motherName: null,
    slug: 'lievijne-jans-1542',
  },
  {
    name: 'Bernardus de Causmaecker',
    sex: 'm',
    born: 1721,
    died: 1789,
    fatherName: 'Lieven de Causmaecker',
    motherName: 'Livina Haverbeke',
    slug: 'bernardus-de-causmaecker-1721',
  },
  {
    name: 'Jacoba Lammens',
    sex: 'f',
    born: 1699,
    died: 1740,
    fatherName: 'Lieven Lammens',
    motherName: 'Livina de Vrieze',
    slug: 'jacoba-lammens-1699',
  },
  {
    name: 'Pieter de Decker',
    sex: 'm',
    born: 1705,
    died: 1780,
    fatherName: 'Joos de Decker',
    motherName: 'Petronella van de Steene',
    slug: 'pieter-de-decker-1705',
  },
  {
    name: 'Joanna de Pape',
    sex: 'f',
    born: 1654,
    died: 1723,
    fatherName: 'Vincent de Pape',
    motherName: 'Petronella Wauters',
    slug: 'joanna-de-pape-1654',
  },
  {
    name: 'Daniel Haverbeke',
    sex: 'm',
    born: 1652,
    died: 1723,
    fatherName: 'Lieven Haverbeke',
    motherName: 'Elisabeth Hercke',
    slug: 'daniel-haverbeke-1652',
  },
  {
    name: 'Lieven Haverbeke',
    sex: 'm',
    born: 1631,
    died: 1676,
    fatherName: 'Pieter Haverbeke',
    motherName: 'Anna van Hecke',
    slug: 'lieven-haverbeke-1631',
  },
  {
    name: 'Martina de Pape',
    sex: 'f',
    born: 1666,
    died: 1727,
    fatherName: 'Vincent de Pape',
    motherName: 'Petronella Wauters',
    slug: 'martina-de-pape-1666',
  },
  {
    name: 'Jan Francies Haverbeke',
    sex: 'm',
    born: 1725,
    died: 1779,
    fatherName: 'Pieter Bernard Haverbeke',
    motherName: 'Livina de Vrieze',
    slug: 'jan-francies-haverbeke-1725',
  },
  {
    name: 'Maria Haverbeke',
    sex: 'm',
    born: 1905,
    died: 1997,
    fatherName: 'Emile Haverbeke',
    motherName: 'Emma de Milliano',
    slug: 'maria-haverbeke-1905',
  },
  {
    name: 'Petronella de Decker',
    sex: 'f',
    born: 1731,
    died: 1781,
    fatherName: 'Pieter de Decker',
    motherName: 'Livina Haverbeke',
    slug: 'petronella-de-decker-1731',
  },
  {
    name: 'Livina Sierens',
    sex: 'f',
    born: 1761,
    died: 1826,
    fatherName: 'Jan Sierens',
    motherName: 'Maria van Waes',
    slug: 'livina-sierens-1761',
  },
  {
    name: 'Laurentia Haverbeke',
    sex: 'f',
    born: 1710,
    died: 1786,
    fatherName: 'Jan Haverbeke',
    motherName: 'Maria de Rycke',
    slug: 'laurentia-haverbeke-1710',
  },
  {
    name: 'Carel Haverbeke',
    sex: 'm',
    born: 1796,
    died: 1837,
    fatherName: 'Pieter Antone Haverbeke',
    motherName: 'Livina Sierens',
    slug: 'carel-haverbeke-1796',
  },
  {
    name: 'Elisabeth Hercke',
    sex: 'f',
    born: 1632,
    died: 1674,
    fatherName: 'Willem Hercke',
    motherName: 'Margriet de Brabander',
    slug: 'elisabeth-hercke-1632',
  },
  {
    name: 'Jan Haverbeke',
    sex: 'm',
    born: 1671,
    died: 1731,
    fatherName: 'Lieven Haverbeke',
    motherName: 'Elisabeth Hercke',
    slug: 'jan-haverbeke-1671',
  },
  {
    name: 'Anna van Hecke',
    sex: 'f',
    born: 1607,
    died: 1670,
    fatherName: 'Paschasius van Hecke',
    motherName: 'Martijntken Beelaert',
    slug: 'anna-van-hecke-1607',
  },
  {
    name: 'Maria Sturm',
    sex: 'f',
    born: 1835,
    died: 1917,
    fatherName: 'Charles Sturm',
    motherName: 'Seraphina Spelier',
    slug: 'maria-sturm-1835',
  },
  {
    name: 'Jacobus Bernardus van Brussel',
    sex: 'm',
    born: 1736,
    died: 1809,
    fatherName: 'Jan van Brussel',
    motherName: 'Elisabeth Haverbeke',
    slug: 'jacobus-bernardus-van-brussel-1736',
  },
];

// eslint-disable-next-line no-console
console.log(people); // you can remove it

const dashboard = document.querySelector('.dashboard tbody');

people.forEach((person) => {
  const row = document.createElement('tr');
  const cell1 = document.createElement('td');

  cell1.textContent = person.name;

  const cell2 = document.createElement('td');

  cell2.textContent = person.sex === 'm' ? 'Male' : 'Female';

  const cell3 = document.createElement('td');

  cell3.textContent = person.born;

  const cell4 = document.createElement('td');

  cell4.textContent = person.died;

  const cell5 = document.createElement('td');

  cell5.textContent = person.died - person.born;

  const cell6 = document.createElement('td');

  cell6.textContent = Math.ceil(person.died / 100);
  row.appendChild(cell1);
  row.appendChild(cell2);
  row.appendChild(cell3);
  row.appendChild(cell4);
  row.appendChild(cell5);
  row.appendChild(cell6);
  dashboard.appendChild(row);
});
