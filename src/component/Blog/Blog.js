import React from 'react';

const Blog = () => {
    return (
        <div className='container'>
            <article>
                <h5>1. Difference between javascript and nodejs</h5>
                <p><b>Javascript</b></p>
                <ul>
                    <li>
                        Javascript is a programming language that is used for writing scripts on the website.
                    </li>
                    <li>
                        Javascript can only be run in the browsers.
                    </li>
                    <li>
                        It is basically used on the client-side.
                    </li>
                    <li>
                        Javascript is allowed to add HTML and play with the DOM.
                    </li>
                    <li>
                        Javascript can run in any browser engine.
                    </li>
                </ul>
                <p><b>NodeJS</b></p>
                <ul>
                    <li>
                        NodeJS is a Javascript runtime environment.
                    </li>
                    <li>
                        We can run Javascript outside the browser with the help of NodeJS.
                    </li>
                    <li>
                        It is mostly used on the server-side.
                    </li>
                    <li>
                        Nodejs does not have capability to add HTML tags.
                    </li>
                    <li>
                        V8 is the Javascript engine inside of node.js that parses and runs Javascript.
                    </li>
                </ul>
            </article>
            <article>
                <h5>2. When should you use nodejs and when should you use mongodb</h5>
                <p></p>
            </article>
            <article>
                <h5>3. Differences between sql and nosql databases.</h5>
                <p><b>SQL</b></p>
                <ul>
                    <li>
                        SQL is RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)
                    </li>
                    <li>
                        These databases have fixed or static or predefined schema
                    </li>
                    <li>
                        These databases are not suited for hierarchical data storage
                    </li>
                    <li>
                        These databases are best suited for complex queries
                    </li>
                </ul>
                <p><b>NoSQL</b></p>
                <ul>
                    <li>
                        NoSQL is Non-relational or distributed database system.
                    </li>
                    <li>
                        They have dynamic schema
                    </li>
                    <li>
                        These databases are best suited for hierarchical data storage.
                    </li>
                    <li>
                        These databases are not so good for complex queries
                    </li>
                </ul>
            </article>
            <article>
                <h5>4. What is the purpose of jwt and how does it work</h5>
                <p><b>purpose of jwt</b></p>
                <p className='text-'>
                    JWTT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
                </p>
                <p><b>how does JWT work</b></p>
                <p>
                    JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: aaaaa.yyyyy.zzzzz.
                </p>
            </article>
            

        </div>
    );
};

export default Blog;