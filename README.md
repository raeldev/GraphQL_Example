# Graphql_Example

Just to example how Graphql works.


### Prerequisites

1 - NodeJS
2 - Yarn or another package manager

## Getting Started

1 - Go to project after clone
2 - Run "yanr install" to install all dependencies or install "graphql-yoga" from your package manager.
```
yanr install
```
3 - Run "node .\src\server.js" (my case, Windows 10)
```
node .\src\server.js
```
4 - Open playground in browser http:\\localhost:4000 and feel the magic.
![](https://media1.giphy.com/media/12NUbkX6p4xOO4/giphy.gif)

5 - Query Example (Always use POST):
{
    query users {
        users ({ 
            per_page: 20, 
            page: 2, 
            filter: {
                nome: { "starts_with": "Israel" }
            }
        })
        {
            id,
            name
            groups {
                id
            }
        }
    }
}

6 - Mutation Example:
{
    mutation updateUser {
        updateUser(id: 1) {
            email: "imoreira@leanwork.com.br" 
        }
    }
}


## Built With

* [NodeJS](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [graphql-yoga](https://maven.apache.org/) - Dependency Management