import React from 'react';

function Table({titles, contents}) {
  return (
    <table>
      <thead>
        <tr>
          {titles.map((title, index) => (
            <td key={index}>{title}</td>
          ))}
        </tr>
      </thead>
      <tbody>
   {contents.map((user, index) => (
          <tr key={index}>
              {titles.map((title, index) => (
                <td key={index}>{user[title]}</td>
              ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;