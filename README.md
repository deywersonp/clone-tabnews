# clone-tabnews

### Aula 03

- `nvm install lts/hydrogen` => instala a versão primeiro, depois podemos fazer o set dela como padrão.
- `nvm alias default ${version alias}` => utilizado para instalar uma versão do node informando o alias da versão, e.eg: hydrogen.
- Criar o arquivo `.nvmrc` ajuda no controle de versão. Ao digitar `nvm install` no terminal do projeto, o mesmo vai buscar as informações dentro do nvmrc e fazer a instalação da versão recomendada lá. PS: importante deixar uma quebra de linha após informar o alias da versão dentro do arquivo `.nvmrc`.

git@github.com:deywersonp/clone-tabnews.git

### Aula 12

- `dig [domain_name] A` -> Permite fazer a busca de informações sobre o DNS
- `dig [domain_name] A +trace` -> Traz a informação sobre o DNS de forma detalhada, demonstrando todo o fluxo de chamada até o servidor autoritativo.

Podemos utilizar os demais tipos de registros na consulta também, como:

- `CNAME`
- `TXT`, etc.

#### Decode de Base64

- `echo 'base64code' | base64 --decode`
