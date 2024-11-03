import { For, Match, ParentProps, Switch } from "solid-js";

class Column {
  leftBorder = false;
  rightBorder = false;
  content = "";

  hasBorder() {
    return this.leftBorder || this.rightBorder;
  }
}

function mapChar(char: string) {
  switch (char) {
    case 'x':
      return '✖';
    case 'o':
      return '⭕'
    case 'y':
      return '✔'
    case '-':
      return ' ';
  }
  throw new Error(`Invalid cannon table value: ${char}`);
}

function buildRow(data: string, type: "header" | "body") {
  if (!data)
    throw new Error("Tried to make a row with no content");

  let currentColumn: Column = new Column();
  // don't make them specify the left border of the first column
  let haveLeftBound = true;
  let inQuotes = false;
  const columns: Column[] = [];
  for (const char of data) {
    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (!inQuotes && (' ' === char || '|' === char)) {
      if (haveLeftBound) {
        currentColumn.rightBorder = '|' === char;
        columns.push(currentColumn);
        const newColumn = new Column();
        // force adjacent ends of cells to have matching border settings
        newColumn.leftBorder = currentColumn.rightBorder;
        currentColumn = newColumn;
      } else {
        currentColumn.leftBorder = '|' === char;
        haveLeftBound = true;
      }
    } else {
      currentColumn.content += (inQuotes || type === "header") ? char : mapChar(char);
    }
  }
  columns.push(currentColumn);

  if (inQuotes)
    throw new Error(`Unmatched quote in column ${columns.length + 1}`);

  return (
    <tr class={`${type === 'header' ? 'bg-blue-200 dark:bg-blue-700' : 'odd:bg-blue-100 odd:dark:bg-blue-800 even:bg-blue-200 even:dark:bg-blue-700'}`}>
      <For each={columns}>
        {column => {
          const classList = {
            'border-blue-300': true, 
            'dark:border-blue-600': true,
            'border-t': type === 'body',
            'border-s': column.leftBorder, 
            'border-e': column.rightBorder, 
          };
        
          return (
            <Switch>
              <Match when={type === "header"}>
                <th scope="col" classList={classList}>{column.content.trim()}</th>
              </Match>
              <Match when={type === "body"}>
                <td classList={classList}>{column.content.trim()}</td>
              </Match>
            </Switch>
          );
        }}
      </For>
    </tr>
  )
}

function headerRow(data: string) {
  return buildRow(data, "header");
}

interface CannonRowProps {
  data: string
}

export function CannonRow(props: CannonRowProps) {
  return buildRow(props.data, "body");
}

interface CannonTableProps extends ParentProps {
  caption: string,
  head: string
}

export function CannonTable(props: CannonTableProps) {
  return (
    <table class={[
      'border-separate',
      'border-spacing-0',
      'border-t-4',
      'border-b',
      'border-x',
      'border-blue-300',
      'dark:border-blue-600',
      'caption-bottom',
      'my-4',
      'rounded-t',
      'text-center',
      'w-full'
    ].join(' ')}>
      <caption class="font-bold text-sm">{props.caption}</caption>
      <thead class="text-blue-950 dark:text-blue-100 text-lg">
        {headerRow(props.head)}
      </thead>
      <tbody class="text-lg">
        {props.children}
      </tbody>
    </table>
  )
}