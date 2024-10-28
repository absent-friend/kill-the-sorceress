

export default function Legend() {
  return (
    <table class={[
      'border-separate',
      'border-spacing-0',
      'border-t-4',
      'border-b',
      'border-x',
      'bg-emerald-100',
      'dark:bg-emerald-700',
      'border-emerald-300',
      'dark:border-emerald-500',
      'caption-bottom',
      'my-4',
      'rounded-t',
      'w-full'
    ].join(' ')}>
      <caption class="font-bold text-center text-sm">Legend for arena diagrams.</caption>
      <thead>
        <tr class="bg-emerald-200 dark:bg-emerald-600 text-emerald-950 dark:text-white text-left text-lg">
          <th class="border-r border-b ps-2 border-emerald-300 dark:border-emerald-400">Symbol</th>
          <th class="border-l border-b ps-2 border-emerald-300 dark:border-emerald-400">Meaning</th>
        </tr>
      </thead>
      <tbody class="text-emerald-950 dark:text-white text-lg">
        <tr>
          <td class="border-r border-t ps-2 border-emerald-300 dark:border-emerald-400 font-['Roboto_Slab'] text-[#00fcff] text-4xl text-outline">S</td>
          <td class="border-l border-t ps-2 border-emerald-300 dark:border-emerald-400">Sorceress - initial position</td>
        </tr>
        <tr class="bg-emerald-200 dark:bg-emerald-600">
          <td class="border-r border-t ps-2 border-emerald-300 dark:border-emerald-400 font-['Roboto_Slab'] text-[#fffb00] text-4xl text-outline">T</td>
          <td class="border-l border-t ps-2 border-emerald-300 dark:border-emerald-400">Text interaction - location</td>
        </tr>
        <tr>
          <td class="border-r border-t ps-2 border-emerald-300 dark:border-emerald-400 font-['Roboto_Slab'] text-black text-4xl">A B C D E</td>
          <td class="border-l border-t ps-2 border-emerald-300 dark:border-emerald-400">Cannon - location (labeled)</td>
        </tr>
        <tr class="bg-emerald-200 dark:bg-emerald-600">
          <td class="border-r border-t ps-2 border-emerald-300 dark:border-emerald-400 font-['Roboto_Slab'] text-black text-4xl">x</td>
          <td class="border-l border-t ps-2 border-emerald-300 dark:border-emerald-400">Tank - location (general)</td>
        </tr>
        <tr>
          <td class="border-r border-t ps-2 border-emerald-300 dark:border-emerald-400 font-['Roboto_Slab'] text-[#ff2600] text-4xl text-outline">A B C D E</td>
          <td class="border-l border-t ps-2 border-emerald-300 dark:border-emerald-400">Cannon - spawned (labeled)</td>
        </tr>
        <tr class="bg-emerald-200 dark:bg-emerald-600">
          <td class="border-r border-t ps-2 border-emerald-300 dark:border-emerald-400">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="#000000" class="box-content py-1 size-9" aria-label="black ring">
              <path d="M 11.974 12.002 m -11.454 0 a 11.454 11.454 0 1 0 22.908 0 a 11.454 11.454 0 1 0 -22.908 0 Z M 11.974 12.002 m -6.874 0 a 6.874 6.874 0 0 1 13.748 0 a 6.874 6.874 0 0 1 -13.748 0 Z"/>
            </svg>
          </td>
          <td class="border-l border-t ps-2 border-emerald-300 dark:border-emerald-400">Vehicle - dropped/boarded</td>
        </tr>
        <tr>
          <td class="border-r border-t ps-2 border-emerald-300 dark:border-emerald-400 font-['Roboto_Slab'] text-[#00f900] text-4xl text-outline">A9</td>
          <td class="border-l border-t ps-2 border-emerald-300 dark:border-emerald-400">Agent 9 - initial position</td>
        </tr>
        <tr class="bg-emerald-200 dark:bg-emerald-600">
          <td class="border-r border-t ps-2 border-emerald-300 dark:border-emerald-400">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#00f900" stroke="#000000" class="box-content py-1 size-9" aria-label="green arrow">
              <path d="M 0.501 9.753 H 8.802 L 8.802 4.483 L 22.853 11.509 L 8.802 18.534 L 8.802 13.265 H 0.501 V 9.753 Z"></path>
            </svg>
          </td>
          <td class="border-l border-t ps-2 border-emerald-300 dark:border-emerald-400">Agent 9 - pivot direction</td>
        </tr>
        <tr>
          <td class="border-r border-t ps-2 border-emerald-300 dark:border-emerald-400">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#00f900" stroke="#000000" class="box-content py-1 size-9" aria-label="green ring">
              <path d="M 11.974 12.002 m -11.454 0 a 11.454 11.454 0 1 0 22.908 0 a 11.454 11.454 0 1 0 -22.908 0 Z M 11.974 12.002 m -6.874 0 a 6.874 6.874 0 0 1 13.748 0 a 6.874 6.874 0 0 1 -13.748 0 Z"/>
            </svg>
          </td>
          <td class="border-l border-t ps-2 border-emerald-300 dark:border-emerald-400">Agent 9 - vehicle of interest</td>
        </tr>
        <tr class="bg-emerald-200 dark:bg-emerald-600">
          <td class="border-r border-t ps-2 border-emerald-300 dark:border-emerald-400">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ff2600" stroke="#000000" class="box-content py-1 size-9" aria-label="red ring">
              <path d="M 11.974 12.002 m -11.454 0 a 11.454 11.454 0 1 0 22.908 0 a 11.454 11.454 0 1 0 -22.908 0 Z M 11.974 12.002 m -6.874 0 a 6.874 6.874 0 0 1 13.748 0 a 6.874 6.874 0 0 1 -13.748 0 Z"/>
            </svg>
          </td>
          <td class="border-l border-t ps-2 border-emerald-300 dark:border-emerald-400">Attack - initial damage location</td>
        </tr>
        <tr>
          <td class="border-r border-t ps-2 border-emerald-300 dark:border-emerald-400 font-['Roboto_Slab'] text-black text-4xl">1 2 3 4 5</td>
          <td class="border-l border-t ps-2 border-emerald-300 dark:border-emerald-400">Attack - damage location (ordered)</td>
        </tr>
        <tr class="bg-emerald-200 dark:bg-emerald-600">
          <td class="border-r border-t ps-2 border-emerald-300 dark:border-emerald-400 font-['Roboto_Slab'] text-[#00fcff] text-4xl text-outline">x</td>
          <td class="border-l border-t ps-2 border-emerald-300 dark:border-emerald-400">Sorceress - natural stopping point</td>
        </tr>
        <tr>
          <td class="border-r border-t ps-2 border-emerald-300 dark:border-emerald-400 font-['Roboto_Slab'] text-black text-4xl">X</td>
          <td class="border-l border-t ps-2 border-emerald-300 dark:border-emerald-400">Cannon - location (general)</td>
        </tr>
        <tr class="bg-emerald-200 dark:bg-emerald-600">
          <td class="border-r border-t ps-2 border-emerald-300 dark:border-emerald-400">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="#000000" class="box-content py-1 size-9" aria-label="black arrow">
              <path d="M 0.501 9.753 H 8.802 L 8.802 4.483 L 22.853 11.509 L 8.802 18.534 L 8.802 13.265 H 0.501 V 9.753 Z"></path>
            </svg>
          </td>
          <td class="border-l border-t ps-2 border-emerald-300 dark:border-emerald-400">Vehicle - player movement</td>
        </tr>
      </tbody>
    </table>
  )
}