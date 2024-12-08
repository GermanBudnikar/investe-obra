<script>
    import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';
</script>
  
<Table color="blue" noborder={false}>
    <TableBody>
      <TableBodyRow>
        <TableBodyCell>Unidades Vendidas</TableBodyCell>
        <TableBodyCell>16</TableBodyCell>
        <TableBodyCell>57%</TableBodyCell>
      </TableBodyRow>
      <TableBodyRow>
        <TableBodyCell>Unidades em Estoque</TableBodyCell>
        <TableBodyCell>12</TableBodyCell>
        <TableBodyCell>43%</TableBodyCell>
      </TableBodyRow>
    </TableBody>
    <tfoot>
      <tr class="font-semibold text-gray-900 dark:text-white" style="background-color: orange;">
        <th scope="row" class="py-3 px-6 text-base">Total de unidades</th>
        <td class="py-3 px-6">28</td>
        <td class="py-3 px-6">100%</td>
      </tr>
    </tfoot>
</Table>