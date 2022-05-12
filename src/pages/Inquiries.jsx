import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import { useTable } from 'react-table'
import InquiryDataService from '../services/inquiries.service'


const sample_inquiries = [
    {
        "name": "Marcel Might",
        "email": "m.might@gmail.com",
        "phone": "555555555",
        "message": "Need help with a trip"
    },
    {
        "name": "Jack Smith",
        "email": "j.smith@gmail.com",
        "phone": "555555543",
        "message": "Need help with a destination"
    },
    {
        "name": "Jerod Knee",
        "email": "j.knee@gmail.com",
        "phone": "555555554",
        "message": "Planning a family vacation"
    },
]

const Styles = styled.div `
    padding: 1rem;

    table {
        border-spacking: 0;
        border: 1px solid black;

        tr {
            :last-child {
                td {
                     border-bottom: 0;
                }
            }
        }

        th,
        td {
            margin: 0;
            padding: 0.5rem;
            border-bottom: 1px solid black;
            border-right: 1px solid black;

            :last-child {
                border-right: 0;
            }
        }
    }
`

function Table ( { columns, data }) {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({
        columns,
        data,
    })
    return (
        <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    )
}
const Inquiries = () => {
    const [inquiries, setInquiries] = useState([]);

    useEffect(() => {
        retrieveInquiries();
    }, []);

    const retrieveInquiries = () => {
        InquiryDataService.getAll()
            .then((response) => {
                setInquiries(response.data);
                console.log(response.data);
            })
            .catch((e) => {
                console.log(e);
            })
    }
    const columns = React.useMemo(
        () => [
            {
                Header: 'Inquiries',
                columns: [
                    {
                        Header: 'Name',
                        accessor: 'name'
                    },
                    {
                        Header: 'Email',
                        accessor: 'email'
                    },
                    {
                        Header: 'Phone',
                        accessor: 'phone'
                    },
                    {
                        Header: 'Message',
                        accessor: 'message'
                    },
                ]
            }

         
        ],
        []
    )

    return (
        <div>
            <Styles>
                <Table columns={columns} data={inquiries} />
            </Styles>
        </div>


    )
}

export default Inquiries
