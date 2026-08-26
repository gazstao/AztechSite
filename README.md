# Aztech Alta Tecnologia

Site institucional da **Aztech Alta Tecnologia**, com informações sobre:

- Manutenção de equipamentos de medicina nuclear e workstations
- Cibersegurança e gestão de TI
- Projetos de inteligência artificial local e privada
- Educação continuada e treinamentos técnicos
- Projetos, pesquisas, hackathons e iniciativas pessoais

O site possui cinco áreas principais e interface em português, inglês e espanhol:

- `/` — Soluções
- `/links` — Recursos curados
- `/projects` — Projetos
- `/gazstao` — Perfil Gazstao, com identidade visual Matrix
- `/sobre` — Sobre a Aztech

## 1. Requisitos

### Para desenvolvimento local

Instale:

- [Node.js](https://nodejs.org/) 20 ou superior
- [pnpm](https://pnpm.io/installation) 10 ou superior
- Git, caso o projeto seja baixado do GitHub

Node.js 20 ou 22 LTS são recomendados para melhor compatibilidade com ferramentas de desenvolvimento. Node.js 24 também pode ser utilizado após a instalação correta das dependências.

### Para executar somente no WAMP

O WAMP não é obrigatório para desenvolver o site. Ele pode ser usado para servir a versão final estática, depois que o projeto for compilado.

O site não utiliza PHP nem MySQL neste momento.

## 2. Baixar o projeto

Clone o repositório:

```bash
git clone URL_DO_REPOSITORIO
cd AztechSite
```

Substitua `URL_DO_REPOSITORIO` pelo endereço real do repositório GitHub.

Se o projeto já estiver baixado, apenas entre na pasta principal:

```text
G:\Github\AztechSite
```

É importante executar os comandos a partir da raiz do projeto, onde ficam:

```text
package.json
pnpm-lock.yaml
pnpm-workspace.yaml
```

## 3. Instalar as dependências

Na raiz do projeto, execute:

```bash
pnpm install
```

O projeto utiliza pnpm porque é um workspace com vários pacotes. Não utilize `npm install` ou `yarn install`.

O comando de pré-instalação é compatível com Windows, macOS, Linux e Replit. Ele é executado pelo Node.js e não depende do comando Unix `sh`.

## 4. Executar em desenvolvimento

### Windows PowerShell

Na raiz do projeto:

```powershell
$env:PORT = "5173"
$env:BASE_PATH = "/"
pnpm --filter @workspace/aztech-site run dev
```

Abra no navegador:

```text
http://localhost:5173/
```

### Windows Prompt de Comando

```cmd
set PORT=5173
set BASE_PATH=/
pnpm --filter @workspace/aztech-site run dev
```

Depois acesse:

```text
http://localhost:5173/
```

### macOS ou Linux

```bash
PORT=5173 BASE_PATH=/ pnpm --filter @workspace/aztech-site run dev
```

Depois acesse:

```text
http://localhost:5173/
```

Para interromper o servidor, pressione `Ctrl + C`.

## 5. Gerar a versão final do site

A versão final é uma aplicação estática. O comando de build transforma o código React em arquivos HTML, CSS, JavaScript e imagens.

### Build para acesso na raiz do servidor

Use esta opção quando o site será acessado diretamente em um domínio ou em `http://localhost/`:

#### PowerShell

```powershell
$env:PORT = "4173"
$env:BASE_PATH = "/"
pnpm --filter @workspace/aztech-site run build
```

#### Prompt de Comando

```cmd
set PORT=4173
set BASE_PATH=/
pnpm --filter @workspace/aztech-site run build
```

### Build para uma subpasta do WAMP

Se o site será acessado em:

```text
http://localhost/aztech/
```

use:

#### PowerShell

```powershell
$env:PORT = "4173"
$env:BASE_PATH = "/aztech/"
pnpm --filter @workspace/aztech-site run build
```

O resultado será criado em:

```text
artifacts\aztech-site\dist\public
```

Essa pasta deve conter arquivos semelhantes a:

```text
index.html
assets\
```

## 6. Hospedar no WAMP

### 6.1 Copiar os arquivos

Depois do build, copie **o conteúdo** de:

```text
artifacts\aztech-site\dist\public
```

para uma nova pasta:

```text
C:\wamp64\www\aztech
```

Dependendo da instalação do WAMP, o caminho pode ser:

```text
C:\wamp\www\aztech
```

Não copie somente a pasta `src`. O WAMP deve receber os arquivos gerados dentro de `dist\public`.

### 6.2 Configurar as rotas do React

Como o site possui páginas como `/projects`, `/links`, `/gazstao` e `/sobre`, o Apache precisa redirecionar rotas desconhecidas para `index.html`.

Dentro de `C:\wamp64\www\aztech`, crie um arquivo chamado `.htaccess`:

```apache
RewriteEngine On
RewriteBase /aztech/

RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . index.html [L]
```

O módulo `rewrite_module` precisa estar habilitado no Apache do WAMP. Normalmente ele pode ser habilitado pelo menu:

```text
WAMP → Apache → Apache modules → rewrite_module
```

Reinicie o Apache após habilitar o módulo.

### 6.3 Acessar o site

Inicie o Apache no WAMP e abra:

```text
http://localhost/aztech/
```

Teste também diretamente:

```text
http://localhost/aztech/projects
http://localhost/aztech/links
http://localhost/aztech/gazstao
http://localhost/aztech/sobre
```

Se uma página abrir normalmente ao clicar na navegação, mas apresentar erro 404 ao atualizar o navegador, o problema está no `.htaccess` ou no `rewrite_module`.

## 7. Estrutura do projeto

```text
AztechSite/
├── artifacts/
│   ├── aztech-site/
│   │   ├── src/
│   │   │   ├── components/
│   │   │   ├── lib/
│   │   │   ├── pages/
│   │   │   ├── App.tsx
│   │   │   └── index.css
│   │   ├── dist/
│   │   │   └── public/       # criado pelo build
│   │   ├── package.json
│   │   └── vite.config.ts
│   ├── api-server/           # servidor compartilhado do workspace
│   └── mockup-sandbox/       # ambiente de protótipos
├── attached_assets/          # imagem e materiais fornecidos
├── lib/                      # bibliotecas compartilhadas
├── scripts/
├── package.json
├── pnpm-lock.yaml
└── pnpm-workspace.yaml
```

Os arquivos principais do site são:

```text
artifacts/aztech-site/src/App.tsx
artifacts/aztech-site/src/pages/Home.tsx
artifacts/aztech-site/src/pages/Links.tsx
artifacts/aztech-site/src/pages/Projects.tsx
artifacts/aztech-site/src/pages/Gazstao.tsx
artifacts/aztech-site/src/pages/About.tsx
artifacts/aztech-site/src/lib/i18n.tsx
```

## 8. Alterar o conteúdo

### Textos gerais e idiomas

Os textos de navegação, títulos, descrições e idiomas ficam em:

```text
artifacts/aztech-site/src/lib/i18n.tsx
```

Os idiomas disponíveis são:

```text
pt — Português
en — English
es — Español
```

### Projetos

Os projetos e seus links ficam em:

```text
artifacts/aztech-site/src/pages/Projects.tsx
```

Após alterar qualquer conteúdo, gere novamente a versão final:

```powershell
$env:PORT = "4173"
$env:BASE_PATH = "/aztech/"
pnpm --filter @workspace/aztech-site run build
```

Depois copie novamente o conteúdo de `dist\public` para a pasta do WAMP.

### E-mail de contato

O e-mail atualmente utilizado é:

```text
sac@aztechtecnologia.com.br
```

O botão de contato e o rodapé utilizam o formato `mailto:` para abrir o programa de e-mail padrão do computador.

## 9. Verificar o projeto

Para verificar se o código TypeScript está correto:

```bash
pnpm --filter @workspace/aztech-site run typecheck
```

Para gerar a versão final:

```bash
pnpm --filter @workspace/aztech-site run build
```

O build exige as variáveis `PORT` e `BASE_PATH`. No Windows PowerShell, defina-as antes do comando:

```powershell
$env:PORT = "4173"
$env:BASE_PATH = "/aztech/"
```

## 10. Problemas comuns

### Erro: `'sh' não é reconhecido como um comando`

Esse erro ocorre quando uma versão antiga do projeto tenta executar um comando Unix no Windows.

Atualize o projeto pelo GitHub:

```powershell
git pull
```

Depois execute:

```powershell
pnpm install
```

A versão atual usa `scripts/ensure-pnpm.cjs` e não depende do comando `sh`.

### Erro: `Cannot find module '@rollup/rollup-win32-x64-msvc'`

Esse erro indica que o pacote nativo do Rollup para Windows não foi instalado. Primeiro atualize o projeto e reinstale as dependências:

```powershell
git pull
Remove-Item -Recurse -Force node_modules
pnpm install --force
```

Depois tente o build novamente:

```powershell
$env:PORT = "4173"
$env:BASE_PATH = "/aztech/"
pnpm --filter @workspace/aztech-site run build
```

Não remova `pnpm-lock.yaml`. O lockfile atual já inclui o pacote nativo do Rollup para Windows.

### Erro: `PORT environment variable is required`

Defina a porta antes de executar o site:

```powershell
$env:PORT = "5173"
$env:BASE_PATH = "/"
pnpm --filter @workspace/aztech-site run dev
```

Para build em uma subpasta do WAMP:

```powershell
$env:PORT = "4173"
$env:BASE_PATH = "/aztech/"
pnpm --filter @workspace/aztech-site run build
```

### Erro: `BASE_PATH environment variable is required`

Defina a base conforme o endereço final:

```text
http://localhost/aztech/ → /aztech/
http://localhost/        → /
```

Exemplo:

```powershell
$env:BASE_PATH = "/aztech/"
```

### A pasta `dist/public` não aparece

`pnpm install` apenas instala as dependências; ele não cria a versão final do site.

Execute explicitamente:

```powershell
$env:PORT = "4173"
$env:BASE_PATH = "/aztech/"
pnpm --filter @workspace/aztech-site run build
```

### O site abre, mas imagens ou arquivos CSS não carregam

Confira se o `BASE_PATH` usado no build corresponde ao endereço:

```text
Site em http://localhost/aztech/ → BASE_PATH=/aztech/
Site em http://localhost/        → BASE_PATH=/
```

Após corrigir a variável, faça o build novamente e recopie o conteúdo de `dist\public`.

### O menu funciona, mas atualizar uma página gera 404

Verifique:

1. Se o arquivo `.htaccess` existe na pasta pública do site.
2. Se o `RewriteBase` está correto.
3. Se o `rewrite_module` está habilitado no Apache.
4. Se o Apache foi reiniciado depois da alteração.

## 11. Usar o projeto no Replit

No Replit, o site é iniciado pelo workflow:

```text
artifacts/aztech-site: web
```

Normalmente não é necessário executar comandos manualmente. Para desenvolvimento, abra a prévia do projeto.

Se o workflow precisar ser reiniciado, use a opção de reiniciar o workflow do site. O Replit fornece automaticamente as variáveis de porta e roteamento necessárias.

## 12. Enviar alterações para o GitHub

No painel **Git** do Replit:

1. Abra o painel de controle de versão.
2. Revise as alterações em **Review Changes**.
3. Selecione os arquivos e clique em **Stage**.
4. Escreva uma mensagem, por exemplo:

   ```text
   Update project links and Windows setup
   ```

5. Clique em **Commit**.
6. Depois do commit, clique em **Push** ou no ícone de seta para cima.

No computador Windows, baixe as alterações com:

```powershell
git pull
```

## 13. Licença e conteúdo externo

Os links de projetos, documentos e recursos apontam para endereços externos informados pela Aztech. A disponibilidade desses endereços depende dos respectivos serviços.
