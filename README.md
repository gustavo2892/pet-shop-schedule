<h1 align="center">
  Pet Shop Schedule / Mundo Pet
  <div>
    <img src="https://img.shields.io/badge/-ReactJS-blue" />
    <img src="https://img.shields.io/badge/-NextJS-blueviolet" />
    <img src="https://img.shields.io/badge/-TailwindCSS-brightgreen" />
  </div>
</h1>

> Freitas Software.

## Descrição

Este projeto é uma aplicação web desenvolvida com Next.js, criada com o objetivo de demonstrar, na prática, o uso dos principais recursos modernos do framework — do desenvolvimento ao deploy.

A aplicação consiste em um sistema de agendamentos para um Pet Shop, permitindo criar, editar e remover agendamentos de forma eficiente, utilizando as melhores práticas do ecossistema React e Next.js.

## Features:

- Criação, edição e exclusão de agendamentos
- Uso de Server Actions para operações no servidor
- Combinação inteligente de React Server Components e Client Components
- Validação de formulários com React Hook Form e Zod
- Revalidação de cache no servidor com revalidatePath, garantindo dados sempre atualizados
- Estrutura pensada para escalabilidade e boas práticas de organização de código

## Principais Objetivos

O objetivo principal deste projeto é aprender e aplicar conceitos avançados do Next.js, simulando um cenário real de mercado, desde a modelagem das funcionalidades até a entrega final em produção.

## ▶️ Como Rodar o Projeto

### 1) Instalar dependências

```
pnpm install

```
### 2) Iniciar prisma com o datasource provider postgresql

```
npx prisma init --datasource-provider postgresql

```

### 3) Rodar generate do prisma

```
npx prisma generate

```

### 4) Rodar aplicação

```
pnpm dev

```
