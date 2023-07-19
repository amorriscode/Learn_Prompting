---
sidebar_position: 1000
---

# 🟢 Початок подорожі


import Steps from '@site/docs/assets/basics/steps.svg';

<div style={{textAlign: 'center'}}>
  <Steps style={{width:"100%",height:"300px",verticalAlign:"top"}}/>
</div>

Тепер, коли ви дізналися про основи інженерії запитів, ви готові самостійно розпочати будувати запити. Решта цього курсу міститиме додаткові техніки та ресурси, але найкращий спосіб навчитися ІЗ – почати експериментувати з власними запитами. Ця сторінка покаже вам, як почати розв’язувати довільний приклад інженерії запитів.

Припустімо, вам потрібний запит, який створить захопливу інтерактивну історію за допомогою ChatGPT.

## Крок 1: Дослідження

Перше, що потрібно зробити, це дослідити потрібний запит. Крім пошуку в Google, наступні ресурси є дуже цінними:

- [Чудові підказки ChatGPT](https://github.com/f/awesome-chatgpt-prompts)
- [FlowGPT](https://flowgpt.com)
- [r/PromptDesign](https://www.reddit.com/r/PromptDesign/) (та подібні сабредити)
- [Вивчайте запити Discord](https://discord.gg/learn-prompting) (та інші актуальні Discord, включно з [OpenAI Discord](https://discord.gg/openai))

Ви можете знайти [це](https://prompts.chat/#act-as-a-text-based-adventure-game) за допомогою [Heroj04](https://github.com/Heroj04), що буде хорошою відправною точкою:
> Я хочу, щоб ти виступав у ролі текстової пригодницької гри. Я буду вводити команди, а ти відповідатимеш описом того, що бачить персонаж. Я хочу, щоб ти відповідав лише за результатами гри в одному унікальному блоці коду, і нічого більше. не пиши пояснень. не вводь команди, якщо я не вказую тобі це зробити. коли мені потрібно сказати тобі щось українською, я зроблю це, помістивши текст у фігурні дужки {ось так}. моя перша команда – прокинься

## Крок 2: Експеримент

Тепер ми розмістимо запит в ChatGPT і подивимося, що станеться.

import CSharp from '@site/docs/assets/basics/csharp.webp';

<div style={{textAlign: 'center'}}>
  <img src={CSharp} style={{width: "750px"}} />
</div>

Ми бачимо, що він створив історію, але написав її всередині блоку коду csharp (мова програмування). Можливо, ми цього не хочемо, тому ми змінимо запит на:

> Я хочу, щоб ти виступав у ролі текстової пригодницької гри. Я буду вводити команди, а ти відповідатимеш описом того, що бачить персонаж. Не пиши пояснень. Моя перша команда – прокинься


**Відповідь ChatGPT**:
```text
// highlight-start
Ви повільно відкриваєте очі й усвідомлюєте, що лежите на холодній твердій землі. Оглядаючись навколо, ви розумієте, що знаходитесь у темній печері. Повітря вогке й затхле, десь здалеку чути, як капає вода. Ваша голова пульсує, і ви почуваєтесь дезорієнтованим. Вам потрібно зрозуміти, де ви і як звідси вибратися.
// highlight-end
```

Чудово, тепер він виводить історію як звичайний текст. Однак у нашому запиті бракує деталей. Додамо ще трохи структури до запиту:

> Я хочу, щоб ти виступав у ролі текстової пригодницької гри. Я буду вводити команди, а ти відповідатимеш описом того, що бачить персонаж. Не пиши пояснень. Використовуй барвисту мову та описові слова. Дія відбувається у котеджному селі, де гноми та жаби вільно розгулюють на рівних. Щоразу, коли ти говориш, починай абзац із ЧАС, МІСЦЕ, ДРУЗІ (хто з тобою), ПРЕДМЕТИ (які предмети у тебе є). Моя перша команда – прокинься.

**Відповідь ChatGPT**:
```text
// highlight-start
ЧАС: Рано-вранці
МІСЦЕ: Затишний, химерний котедж, розташований у селі, оточеному пишною зеленню і запашними квітами.
ДРУЗІ: Ви одні у своїй спальні, лежите під затишною ковдрою.
ПРЕДМЕТИ: Ви бачите дерев’яну тумбочку біля свого ліжка, а на підвіконні — повний кошик живих квітів.

Прокинувшись, ви відчуваєте тепло сонця, що проникає крізь вікно, і тихе щебетання пташок надворі. Ви сідаєте на ліжко і витягуєте руки, дивлячись на чудові квіти, що цвітуть надворі. Ніжний шелест листя та легкий вітерець дарують відчуття спокою та умиротворення. Ви відчуваєте себе омолодженими та відновленими, готовими до будь-яких пригод, які може принести день.
// highlight-end
```

Ах, чудово! Тепер ви можете втілити в життя свої мрії про котедж із ChatGPT 🌸


## Крок 3: Отримайте відгук і повторіть

Тепер покажіть своїм друзям/співробітникам/босу та попросіть їх надати відгук. Якщо їм це сподобається, чудово! Якщо ні, повторюйте запит, доки не отримаєте те, що сподобається вам обом. Ви також можете запитати відгук у згаданих вище спільнотах. Цей крок насправді ніколи не закінчується. Ви завжди будете повторювати свої запити, оскільки проблеми та люди з часом змінюються.

## Висновок

Виконуйте інженерію запитів так, як *ви* хочете. Я (супроводжувач цього курсу) завжди пишу свої запити з нуля. Не існує золотого стандарту щодо того, як писати найкращі запити; Метод проб і помилок – найкращий спосіб навчання. Гарного навчання та успіхів у решті курсу!

:::note
Рекомендації в цій статті стосуються всіх прикладів інженерії запитів, а не лише написання інтерактивних історій!
:::


## Примітки

- У наступних розділах ви можете побачити, що слова **ШІ, модель і ВММ використовуються як синоніми**. Для отримання додаткової інформації перегляньте [словниковий довідник](https://learnprompting.org/docs/vocabulary).