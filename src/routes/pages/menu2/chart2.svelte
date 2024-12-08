<script>
    import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';
</script>
  
<Table color="red" hoverable={true} noborder={false}>
    <TableBody>
      <TableBodyRow>
        <TableBodyCell>Receita Realizada</TableBodyCell>
        <TableBodyCell> R$ 1,231,153.47 (16%) </TableBodyCell>
      </TableBodyRow>
      <TableBodyRow>
        <TableBodyCell>Receita a Realizar</TableBodyCell>
        <TableBodyCell> R$ 6,253,266.28 (84%) </TableBodyCell>
      </TableBodyRow>
    </TableBody>
    <tfoot>
      <tr class="font-semibold text-gray-900 dark:text-white" style="background-color: orange;">
        <th scope="row" class="py-3 px-6 text-base">Receita Total</th>
        <td class="py-3 px-6"> R$ 7,484,419.75 (100%) </td>
      </tr>
    </tfoot>
</Table>