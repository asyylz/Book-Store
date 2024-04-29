import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { titleTrimmer } from '../utils/titleTrimmer';
import { currencyFormatter } from '../utils/currencyFormatter';

export default function PurchasedBooksTable({ orders }) {
  return (
    <TableContainer component={Paper} sx={{ fontFamily: 'Oswald' }}>
      <Table sx={{ minWidth: 700 }} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell
              align="center"
              colSpan={3}
              sx={{ fontFamily: 'Oswald', fontSize: '20px' }}
            >
              Details
            </TableCell>
            <TableCell
              align="right"
              sx={{ fontFamily: 'Oswald', fontSize: '20px' }}
            >
              Price
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{ fontFamily: 'Oswald', fontSize: '20px' }}>
              Desc
            </TableCell>
            <TableCell
              align="right"
              sx={{ fontFamily: 'Oswald', fontSize: '20px' }}
            >
              Qty.
            </TableCell>
            <TableCell
              align="right"
              sx={{ fontFamily: 'Oswald', fontSize: '20px' }}
            >
              Unit
            </TableCell>
            <TableCell
              align="right"
              sx={{ fontFamily: 'Oswald', fontSize: '20px' }}
            >
              Sum
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders?.map((order) => (
            <React.Fragment key={order.id}>
              <TableRow sx={{ fontSize: '16px' }}>
                Order date:{order?.orderDate}
              </TableRow>
              {order.items.map((item, index) => (
                <TableRow key={item.id}>
                  <TableCell sx={{ fontSize: '16px' }}>
                    {`${index + 1}-`} {titleTrimmer(item.volumeInfo.title)}
                  </TableCell>
                  <TableCell align="right" sx={{ fontSize: '16px' }}>
                    {item.quantity}
                  </TableCell>
                  <TableCell align="right" sx={{ fontSize: '16px' }}>
                    {currencyFormatter.format(
                      item.saleInfo.listPrice?.amount ?? 10
                    )}
                  </TableCell>
                  <TableCell align="right" sx={{ fontSize: '16px' }}>
                    {currencyFormatter.format(
                      (item.saleInfo.listPrice?.amount ?? 10) * item.quantity
                    )}
                  </TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell rowSpan={1} sx={{ backgroundColor: '#eeeeee' }} />
                <TableCell
                  colSpan={2}
                  sx={{ fontSize: '16px', backgroundColor: '#eeeeee' }}
                >
                  Subtotal
                </TableCell>
                <TableCell align="right" sx={{ backgroundColor: '#D9D2D0' }}>
                  {currencyFormatter.format(
                    order.items.reduce(
                      (total, item) =>
                        total +
                        (item.saleInfo.listPrice?.amount ?? 10) * item.quantity,
                      0
                    )
                  )}
                </TableCell>
              </TableRow>
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
