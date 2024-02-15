import * as React from 'react';
import AccordionGroup from '@mui/joy/AccordionGroup';
import Accordion from '@mui/joy/Accordion';
import AccordionDetails from '@mui/joy/AccordionDetails';
import AccordionSummary from '@mui/joy/AccordionSummary';

export default function AccordionNoDivider() {
  const data=[{
    id:1,
    question:'Why React uses className over class attribute?',
    answer:'The attribute class is a keyword in JavaScript, and JSX is an extension of JavaScript. That is the principle reason why React uses className instead of class. Pass a string as the className prop.'
  },
  {
    id:2,
    question:'What are fragments?',
    answer:'It is a common pattern or practice in React for a component to return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM. You need to use either or a shorter syntax having empty tag (<></>).'
  },
  {
    id:3,
    question:'Why fragments are better than container divs?',
    answer:'Fragments are a bit faster and use less memory by not creating an extra DOM node. This only has a real benefit on very large and deep trees.Some CSS mechanisms like Flexbox and CSS Grid have a special parent-child relationships, and adding divs in the middle makes it hard to keep the desired layout.The DOM Inspector is less cluttered.'
  },
  {
    id:4,
    question:'What are the advantages of React?',
    answer:'Increases the applications performance with Virtual DOM.JSX makes code easy to read and write.It renders both on client and server side (SSR).Easy to integrate with frameworks (Angular, Backbone) since it is only a view library.Easy to write unit and integration tests with tools such as Jest.'
  },
  {
    id:5,
    question:'What are the limitations of React?',
    answer:'React is just a view library, not a full framework.There is a learning curve for beginners who are new to web development.Integrating React into a traditional MVC framework requires some additional configuration.The code complexity increases with inline templating and JSX.Too many smaller components leading to over engineering or boilerplate.'
  },
  {
    id:6,
    question:'How events are different in React?',
    answer:'Handling events in React elements has some syntactic differences:React event handlers are named using camelCase, rather than lowercase.With JSX you pass a function as the event handler, rather than a string.'
  },
  {
    id:7,
    question:'How to enable production mode in React?',
    answer:'You should use Webpack DefinePlugin method to set NODE_ENV to production, by which it strip out things like propType validation and extra warnings. Apart from this, if you minify the code, for example, Uglifys dead-code elimination to strip out development only code and comments, it will drastically reduce the size of your bundle.'
  },
  {
    id:8,
    question:'Do Hooks replace render props and higher order components?',
    answer:'Both render props and higher-order components render only a single child but in most of the cases Hooks are a simpler way to serve this by reducing nesting in your tree.'
  },
  {
    id:9,
    question:'What is the difference between React and ReactDOM?',
    answer:'The react package contains React.createElement(), React.Component, React.Children, and other helpers related to elements and component classes. You can think of these as the isomorphic or universal helpers that you need to build components. The react-dom package contains ReactDOM.render(), and in react-dom/server we have server-side rendering support with ReactDOMServer.renderToString() and ReactDOMServer.renderToStaticMarkup().'
  },
  {
    id:10,
    question:'Why you cant update props in React?',
    answer:'The React philosophy is that props should be immutable and top-down. This means that a parent can send any prop values to a child, but the child cant modify received props.'
  },
]
  return (
    <div style={{paddingTop:'60px'}}>
    <AccordionGroup disableDivider sx={{ maxWidth: 400 }}>
    {data.map((datas, index)=>(
      <Accordion>
       
          <>
           <AccordionSummary key={index}>{datas.question}</AccordionSummary>
           <AccordionDetails>
             {datas.answer}
           </AccordionDetails>
           </>
       
       
      </Accordion>
       ))}
    </AccordionGroup>
    </div>
  );
}
  
