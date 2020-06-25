import React from 'react';

function Table(props) {
  console.log(props.contents);
  return (
    <table>
      <thead>
        <tr>
          {props.titles.map((title, index) => (
            <td key={index}>{title}</td>
          ))}
        </tr>
      </thead>
      <tbody>
{/*           {props.contents.map((user, index) => (
          <tr key={index}>
              {props.titles.map((title) => (
                <td>{user[title]}</td>
              ))}
          </tr>
        ))} */}
      </tbody>
    </table>
  );
}

export default Table;