import React, { useEffect, useState } from "react";
import {
  StyledTable,
  TableHeader,
  TableHeaderItem,
  TableDataItem,
} from "./styles";

function Table() {
  const [users, setUsers] = useState({});

  // Fetch users dummy data
  useEffect(() => {
    const fetchUsersData = async () => {
      const response = await fetch("https://dummyjson.com/users");
      const usersData = await response.json();
      setUsers(usersData);
    };

    fetchUsersData();
  }, []);

  return (
    Object.keys(users).length > 0 && (
      <StyledTable>
        <TableHeader>
          <tr>
            {Object.keys(users.users[0]).map((head) => (
              <TableHeaderItem key={head}>{head}</TableHeaderItem>
            ))}
          </tr>
        </TableHeader>
        <tbody>
          {users.users.map((user, index) => (
            <tr key={index}>
              {Object.values(user).map((value, i) => (
                <TableDataItem key={i}>
                  {Object.keys(user)[i] === "image" ? (
                    <img src={value} alt="user avatar" />
                  ) : typeof value === "object" ? (
                    Object.values(value)[1]
                  ) : (
                    value
                  )}
                </TableDataItem>
              ))}
            </tr>
          ))}
        </tbody>
      </StyledTable>
    )
  );
}

export default Table;
