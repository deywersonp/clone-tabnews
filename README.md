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

### Aula 17

- `docker compose up` - para executar os services dentro do arquivo `compose.yaml`
- `docker compose up -d` - para executar o container em background
- `docker compose up -d --force-recreate` - é o mesmo que executar `docker compose down` seguido de `docker compose up`
- `docker ps -a` - para listar os container (inclusive os inativos)
- `docker ps {nome-do-container} logs` - para checar os logs de um dado container
- `sudo apt update` seguido de `sudo apt install postgresql-client` - para instalar apenas o client do postgres
  `psql` - comando passível de utiliação para se conectar com o banco de dados local

#### Docker com arquivo de Configuração fora da raíz

- `docker compose -f infra/compose.yaml up -d`

### Aula 19

- Remover dados sensíveis do Repositório `https://docs.github.com/pt/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository`

- Renomear arquivos usando o próprio Git e.g.: `git mv .env .env.development`

# Atalhos VSCode

- `code <filename>` - se existir, abre pra edita; se não existir, cria um novo.
- `ctrl + p` - abre a fuzzy search (pesquisa por termos)
