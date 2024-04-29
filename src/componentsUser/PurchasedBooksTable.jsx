import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { titleTrimmer } from '../utils/titleTrimmer';

const TAX_RATE = 0.07;

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
  return qty * unit;
}

function createRow(desc, qty, unit) {
  const price = priceRow(qty, unit);
  return { desc, qty, unit, price };
}

function subtotal(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const rows = [
  createRow('Paperclips (Box)', 100, 1.15),
  createRow('Paper (Case)', 10, 45.99),
  createRow('Waste Basket', 2, 17.99),
];

const invoiceSubtotal = subtotal(rows);
const invoiceTaxes = TAX_RATE * invoiceSubtotal;
const invoiceTotal = invoiceTaxes + invoiceSubtotal;

export default function PurchasedBooksTable({ orders }) {
  console.log(orders);
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
          {orders.map((order) => (
            <React.Fragment key={order.id}>
              {order.items.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{titleTrimmer(item.volumeInfo.title)}</TableCell>
                  <TableCell align="right">{item.quantity}</TableCell>
                  <TableCell align="right">
                    {item.saleInfo.listPrice?.amount ?? 10}
                  </TableCell>
                  <TableCell align="right">
                    {ccyFormat(
                      (item.saleInfo.listPrice?.amount ?? 10) * item.quantity
                    )}
                  </TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell rowSpan={1} />
                <TableCell colSpan={2}>Subtotal</TableCell>
                <TableCell align="right">
                  {ccyFormat(
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
