// import importAll from 'import-all.macro'

// function getNamedPartials() {
//   const partials = importAll.sync('./*.js')

//   const namedPartials = {}

//   Object.entries(partials)
//     .filter(([k, _]) => k !== './index.js')
//     .forEach(([k, v]) => {
//       const newKey = toKebabCase(k.replace('./', '').replace('.js', ''))
//       namedPartials[newKey] = v.default
//     })

//   function toKebabCase(string) {
//     return string.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()
//   }
//   return namedPartials
// }

// export default getNamedPartials

import Test from './Test'
import PagesInThisSection from './PagesInThisSection'
import ProgrammingExercise from './ProgrammingExercise'
import TextBox from './TextBox'
import SampleOutput from './SampleOutput'
import Youtube from './Youtube'
import Quiznator from './Quiznator'
import PleaseLogin from './PleaseLogin'
import FloatImageRight from './FloatImageRight'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableTh,
} from './Table'
import Deadline from './Deadline'

const mapping = {
  test: Test,
  'pages-in-this-section': PagesInThisSection,
  'programming-exercise': ProgrammingExercise,
  'text-box': TextBox,
  'sample-output': SampleOutput,
  'please-login': PleaseLogin,
  'float-image-right': FloatImageRight,
  youtube: Youtube,
  quiznator: Quiznator,
  table: Table,
  tbody: TableBody,
  thead: TableHead,
  tr: TableRow,
  td: TableCell,
  th: TableTh,
  deadline: Deadline,
}

export default () => {
  return mapping
}