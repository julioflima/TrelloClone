# Hosting:
A aplicação encontra-se hospedada no Heroku.


# Back End:
Na aplicação não fora utilizado scripts SQL puros, e sim uma tecnologia chamada Query Builder que possibilita por meio de código em JS, fazer uma chamada a scripts de maneira mais natural. A principal vantagem do Query Builder, é na verdade a portabilidade para qualquer banco de dados em SQL, seja ele, Oracle, MySQL ou PostgreSQL. O Query Builder, utilizado fora o Knex.  Segue abaixo uma comparação entre as duas tecnologias:

Driver: `SELECT * FROM users`

Query Builder: `table('users').select('*').where()`


Também fora adicionado um Template compatível com o software Insomnia, para fazer a inserção de "To dos" e testar o endpoint. 



No modo desenvolvimento  fora utilizado o SQLite, e no modo produção  o PostgreSQL, como pedido.






