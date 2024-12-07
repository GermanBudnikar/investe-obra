<script>
    import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';
</script>
  
<Table color="yellow">
    <TableHead>
      <TableHeadCell>Código</TableHeadCell>
      <TableHeadCell>Descrição</TableHeadCell>
      <TableHeadCell>Custo Incorrido (R$)</TableHeadCell>
      <TableHeadCell>%</TableHeadCell>
      <TableHeadCell>Custo a incorrer (R$)</TableHeadCell>
      <TableHeadCell>%</TableHeadCell>
      <TableHeadCell>Custo Orçado (R$)</TableHeadCell>
      <TableHeadCell>%</TableHeadCell>
    </TableHead>
    <TableBody tableBodyClass="divide-y">
      <TableBodyRow>
        <TableBodyCell>01</TableBodyCell>
        <TableBodyCell> CUSTOS GERAIS E ADM </TableBodyCell>
        <TableBodyCell>226,135        </TableBodyCell>
        <TableBodyCell> 29% </TableBodyCell>
        <TableBodyCell>558,444        </TableBodyCell>
        <TableBodyCell> 71%        </TableBodyCell>
        <TableBodyCell>784,579        </TableBodyCell>
        <TableBodyCell> 19%        </TableBodyCell>
      </TableBodyRow>
      <TableBodyRow>
        <TableBodyCell>02</TableBodyCell>
        <TableBodyCell>INFRAESTRUTURA INTERNA</TableBodyCell>
        <TableBodyCell>195,554</TableBodyCell>
        <TableBodyCell>28%</TableBodyCell>
        <TableBodyCell>504,656</TableBodyCell>
        <TableBodyCell>72%</TableBodyCell>
        <TableBodyCell>700,210</TableBodyCell>
        <TableBodyCell>17%</TableBodyCell>
      </TableBodyRow>
      <TableBodyRow>
        <TableBodyCell>03</TableBodyCell>
        <TableBodyCell>ÁREA COMUM</TableBodyCell>
        <TableBodyCell>122,664</TableBodyCell>
        <TableBodyCell>50%</TableBodyCell>
        <TableBodyCell>120,508</TableBodyCell>
        <TableBodyCell>50%</TableBodyCell>
        <TableBodyCell>243,172</TableBodyCell>
        <TableBodyCell>6%</TableBodyCell>
      </TableBodyRow>
      <TableBodyRow>
        <TableBodyCell>04</TableBodyCell>
        <TableBodyCell>HABITAÇÃO</TableBodyCell>
        <TableBodyCell>430,666</TableBodyCell>
        <TableBodyCell>19%</TableBodyCell>
        <TableBodyCell>1,883,044</TableBodyCell>
        <TableBodyCell>81%</TableBodyCell>
        <TableBodyCell>2,313,710</TableBodyCell>
        <TableBodyCell>57%</TableBodyCell>
      </TableBodyRow>
    </TableBody>
    <tfoot>
      <tr class="font-semibold text-gray-900 dark:text-white" style="background-color: orange;">
        <th scope="row" class="py-3 px-6 text-base">Total da unidade construtiva</th>
        <td class="py-3 px-6"></td>
        <td class="py-3 px-6"> 975,019        </td>
        <td class="py-3 px-6"> 24%        </td>
        <td class="py-3 px-6"> 3,066,653        </td>
        <td class="py-3 px-6"> 76%        </td>
        <td class="py-3 px-6"> 4,041,672        </td>
        <td class="py-3 px-6"> 100%       </td>
      </tr>
    </tfoot>
</Table>