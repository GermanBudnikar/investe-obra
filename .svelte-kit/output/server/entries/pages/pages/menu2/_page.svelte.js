import { T as Table, a as TableBody, b as TableBodyRow, c as TableBodyCell } from "../../../../chunks/TableBodyRow.js";
function Chart($$payload) {
  Table($$payload, {
    color: "blue",
    hoverable: true,
    noborder: false,
    children: ($$payload2) => {
      TableBody($$payload2, {
        children: ($$payload3) => {
          TableBodyRow($$payload3, {
            children: ($$payload4) => {
              TableBodyCell($$payload4, {
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Custo Realizado`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> `;
              TableBodyCell($$payload4, {
                children: ($$payload5) => {
                  $$payload5.out += `<!---->R$ 975,019.17 (24%)`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!---->`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          TableBodyRow($$payload3, {
            children: ($$payload4) => {
              TableBodyCell($$payload4, {
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Unidades em Estoque`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> `;
              TableBodyCell($$payload4, {
                children: ($$payload5) => {
                  $$payload5.out += `<!---->R$ 3,066,652.50 (76%)`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!---->`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> <tfoot><tr class="font-semibold text-gray-900 dark:text-white"><th scope="row" class="py-3 px-6 text-base">Custo Orçado</th><td class="py-3 px-6">R$ 4,041,671.68 (100%)</td></tr></tfoot>`;
    },
    $$slots: { default: true }
  });
}
function Chart2($$payload) {
  Table($$payload, {
    color: "red",
    hoverable: true,
    noborder: false,
    children: ($$payload2) => {
      TableBody($$payload2, {
        children: ($$payload3) => {
          TableBodyRow($$payload3, {
            children: ($$payload4) => {
              TableBodyCell($$payload4, {
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Unidades Vendidas`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> `;
              TableBodyCell($$payload4, {
                children: ($$payload5) => {
                  $$payload5.out += `<!---->R$ 1,231,153.47 (16%)`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!---->`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          TableBodyRow($$payload3, {
            children: ($$payload4) => {
              TableBodyCell($$payload4, {
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Unidades em Estoque`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> `;
              TableBodyCell($$payload4, {
                children: ($$payload5) => {
                  $$payload5.out += `<!---->R$ 6,253,266.28 (84%)`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!---->`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> <tfoot><tr class="font-semibold text-gray-900 dark:text-white"><th scope="row" class="py-3 px-6 text-base">Total de unidades</th><td class="py-3 px-6">R$ 7,484,419.75 (100%)</td></tr></tfoot>`;
    },
    $$slots: { default: true }
  });
}
function _page($$payload) {
  $$payload.out += `<div data-id="menu2-chart" style="display: inline-block;">`;
  Chart($$payload);
  $$payload.out += `<!----></div> <div data-id="menu2-chart2" style="display: inline-block;">`;
  Chart2($$payload);
  $$payload.out += `<!----></div>`;
}
export {
  _page as default
};
