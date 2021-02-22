import React, { Component } from "react";

const first = [
  {
    tag: "Date of Joining",
  },
  {
    tag: "Location",
  },
  {
    tag: "Designation",
  },
];

const second = [
  {
    tag: "Name of Employee",
  },
  {
    tag: "Sex",
  },
  {
    tag: "Father's/Husband Name",
  },
];

export default class Form extends Component {
  render() {
    return (
      <>
        <form>
          <table>
            <tbody>
              {first.map((c, index) => (
                <tr>
                  <td>
                    <label for="first">{c.tag} </label>
                  </td>
                  <td>
                    <input type="text" name="fname" id="first" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <table>
            <tbody>
              <tr>
                <td>
                  <label for="second">Name Of Employee </label>
                </td>
                <td>
                  <input type="text" name="fname" id="second" />
                </td>
              </tr>

              <tr>
                <td>
                  <label for="second">Sex </label>
                </td>
                <td>
                  <input type="checkbox" name="fname" id="second" />
                </td>
                <td>
                  <label>Male &nbsp; &nbsp; </label>
                </td>

                <td>
                  <input type="checkbox" name="fname" id="second" />
                </td>
                <td>
                  <label for="second">Female </label>
                </td>
              </tr>

              <tr>
                <td>
                  <label for="second">Father's/Husband Name </label>
                </td>
                <td>
                  <input type="text" name="fname" id="second" />
                </td>
              </tr>
            </tbody>
          </table>

          <table>
              <tr>
                  
              </tr>
          </table>
        </form>
      </>
    );
  }
}
