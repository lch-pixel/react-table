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
      {contents.map((user) => {
        return (
          <tr key={user.id}>
              {titles.map((title, index) => {
                return(
                  <td key={user.id+"_"+index}>{user[title]}</td>
                );
              })}
          </tr>
        );
        })}
      </tbody>
    </table>
  );
}

export default Table;