interface ILevel {
  after: string;
  before: string;
  board: string;
  instructions: { [key: string]: string };
  name: string;
  style: { [key: string]: string };
  classes?: { [key: string]: string };
  selector?: string;
}

export const levels: ILevel[] = [
  {
    after: "}",
    before: "#pond {\n  display: flex;\n",
    board: "g",
    instructions: {
      en:
        '<p>Welcome to Flexbox Froggy, a game where you help Froggy and friends by writing CSS code! Guide this frog to the lilypad on the right by using the <code>justify-content</code> property, which aligns items horizontally and accepts the following values:</p><ul><li><code>flex-start</code>: Items align to the left side of the container.</li><li><code>flex-end</code>: Items align to the right side of the container.</li><li><code>center</code>: Items align at the center of the container.</li><li><code>space-between</code>: Items display with equal spacing between them.</li><li><code>space-around</code>: Items display with equal spacing around them.</li></ul><p>For example, <code>justify-content: flex-end;</code> will move the frog to the right. <img src="https://code.org/api/hour/begin_flexbox_froggy.png"></p>'
    },
    name: "justify-content 1",
    style: { "justify-content": "flex-end" }
  },
  {
    after: "}",
    before: "#pond {\n  display: flex;\n",
    board: "gy",
    instructions: {
      en:
        "<p>Use <code>justify-content</code> again to help these frogs get to their lilypads. Remember that this CSS property aligns items horizontally and accepts the following values:</p><ul><li><code>flex-start</code>: Items align to the left side of the container.</li><li><code>flex-end</code>: Items align to the right side of the container.</li><li><code>center</code>: Items align at the center of the container.</li><li><code>space-between</code>: Items display with equal spacing between them.</li><li><code>space-around</code>: Items display with equal spacing around them.</li></ul>"
    },
    name: "justify-content 2",
    style: {
      "justify-content": "center"
    }
  },
  {
    after: "}",
    before: "#pond {\n  display: flex;\n",
    board: "gyr",
    instructions: {
      en:
        "<p>Help all three frogs find their lilypads just by using <code>justify-content</code>. This time, the lilypads have lots of space all around them.</p><p>If you find yourself forgetting the possible values for a property, you can hover over the property name to view them. Try hovering over <code>justify-content</code>.</p>"
    },
    name: "justify-content 3",
    style: {
      "justify-content": "space-around"
    }
  },
  {
    after: "}",
    before: "#pond {\n  display: flex;\n",
    board: "gyr",
    instructions: {
      en:
        "<p>Now the lilypads on the edges have drifted to the shore, increasing the space between them. Use <code>justify-content</code>. This time, the lilypads have equal spacing between them.</p>"
    },
    name: "justify-content 4",
    style: {
      "justify-content": "space-between"
    }
  },
  {
    after: "}",
    before: "#pond {\n  display: flex;\n",
    board: "gyr",
    instructions: {
      en:
        "<p>Now use <code>align-items</code> to help the frogs get to the bottom of the pond. This CSS property aligns items vertically and accepts the following values:</p><ul><li><code>flex-start</code>: Items align to the top of the container.</li><li><code>flex-end</code>: Items align to the bottom of the container.</li><li><code>center</code>: Items align at the vertical center of the container.</li><li><code>baseline</code>: Items display at the baseline of the container.</li><li><code>stretch</code>: Items are stretched to fit the container.</li></ul>"
    },
    name: "align-items 1",
    style: {
      "align-items": "flex-end"
    }
  },
  {
    after: "}",
    before: "#pond {\n  display: flex;\n",
    board: "g",
    instructions: {
      en:
        "<p>Lead the frog to the center of the pond using a combination of <code>justify-content</code> and <code>align-items</code>.</p>"
    },
    name: "align-items 2",
    style: {
      "align-items": "center",
      "justify-content": "center"
    }
  },
  {
    after: "}",
    before: "#pond {\n  display: flex;\n",
    board: "gyr",
    instructions: {
      en:
        "<p>The frogs need to cross the pond again, this time for some lilypads with plenty of space around them. Using a combination of <code>justify-content</code> and <code>align-items</code>.</p>"
    },
    name: "align-items 3",
    style: {
      "align-items": "flex-end",
      "justify-content": "space-around"
    }
  },
  {
    after: "}",
    before: "#pond {\n  display: flex;\n",
    board: "gyr",
    instructions: {
      en:
        "<p>The frogs need to get in the same order as their lilypads using <code>flex-direction</code>. This CSS property defines the direction items are placed in the container, and accepts the following values:</p><ul><li><code>row</code>: Items are placed the same as the text direction.</li><li><code>row-reverse</code>: Items are placed opposite to the text direction.</li><li><code>column</code>: Items are placed top to bottom.</li><li><code>column-reverse</code>: Items are placed bottom to top.</li></ul>"
    },
    name: "flex-direction 1",
    style: {
      "flex-direction": "row-reverse"
    }
  },
  {
    after: "}",
    before: "#pond {\n  display: flex;\n",
    board: "gyr",
    instructions: {
      en:
        "<p>Help the frogs find their column of lilypads using <code>flex-direction</code>. This CSS property defines the direction items are placed in the container, and accepts the following values:</p><ul><li><code>row</code>: Items are placed the same as the text direction.</li><li><code>row-reverse</code>: Items are placed opposite to the text direction.</li><li><code>column</code>: Items are placed top to bottom.</li><li><code>column-reverse</code>: Items are placed bottom to top.</li></ul>"
    },
    name: "flex-direction 2",
    style: {
      "flex-direction": "column"
    }
  },
  {
    after: "}",
    before: "#pond {\n  display: flex;\n",
    board: "gyr",
    instructions: {
      en:
        "<p>Help the frogs get to their own lilypads. Although they seem close, it will take both <code>flex-direction</code> and <code>justify-content</code> to get them there.</p><p>Notice that when you set the direction to a reversed row or column, start and end are also reversed.</p>"
    },
    name: "flex-direction 3",
    style: {
      "flex-direction": "row-reverse",
      "justify-content": "flex-end"
    }
  },
  {
    after: "}",
    before: "#pond {\n  display: flex;\n",
    board: "gyr",
    instructions: {
      en:
        "<p>Help the frogs find their lilypads using <code>flex-direction</code> and <code>justify-content</code>.</p><p>Notice that when the flex direction is a column, <code>justify-content</code> changes to the vertical and <code>align-items</code> to the horizontal.</p>"
    },
    name: "flex-direction 4",
    style: {
      "flex-direction": "column",
      "justify-content": "flex-end"
    }
  },
  {
    after: "}",
    before: "#pond {\n  display: flex;\n",
    board: "gyr",
    instructions: {
      en:
        "<p>Help the frogs find their lilypads using <code>flex-direction</code> and <code>justify-content</code>.</p>"
    },
    name: "flex-direction 5",
    style: {
      "flex-direction": "column-reverse",
      "justify-content": "space-between"
    }
  },
  {
    after: "}",
    before: "#pond {\n  display: flex;\n",
    board: "gyr",
    instructions: {
      en:
        "<p>Help the frogs find their lilypads using <code>flex-direction</code>, <code>justify-content</code>, and <code>align-items</code>.</p>"
    },
    name: "flex-direction 6",
    style: {
      "align-items": "flex-end",
      "flex-direction": "row-reverse",
      "justify-content": "center"
    }
  },
  {
    after: "}",
    before: "#pond {\n  display: flex;\n}\n\n.yellow {\n",
    board: "gyr",
    classes: {
      "#pond, #background": "wrap"
    },
    instructions: {
      en:
        "<p>Sometimes reversing the row or column order of a container is not enough. In these cases, we can apply the <code>order</code> property to individual items. By default, items have a value of 0, but we can use this property to set it to a positive or negative integer value.</p><p>Use the <code>order</code> property to reorder the frogs according to their lilypads.</p>"
    },
    name: "order 1",
    selector: "> :nth-child(2)",
    style: {
      order: "2"
    }
  },
  {
    after: "}",
    before: "#pond {\n  display: flex;\n}\n\n.red {\n",
    board: "gggrg",
    classes: {
      "#pond, #background": "wrap"
    },
    instructions: {
      en:
        "<p>Use the <code>order</code> property to send the red frog to his lilypad.</p>"
    },
    name: "order 2",
    selector: "> :nth-child(4)",
    style: {
      order: "-1"
    }
  },
  {
    after: "}",
    before:
      "#pond {\n  display: flex;\n  align-items: flex-start;\n}\n\n.yellow {\n",
    board: "ggygg",
    instructions: {
      en:
        "<p>Another property you can apply to individual items is <code>align-self</code>. This property accepts the same values as <code>align-items</code> and its value for the specific item.</p>"
    },
    name: "align-self 1",
    selector: "> :nth-child(3)",
    style: {
      "align-self": "flex-end"
    }
  },
  {
    after: "}",
    before:
      "#pond {\n  display: flex;\n  align-items: flex-start;\n}\n\n.yellow {\n",
    board: "ygygg",
    instructions: {
      en:
        "<p>Combine <code>order</code> with <code>align-self</code> to help the frogs to their destinations.</p>"
    },
    name: "align-self 2",
    selector: "> .yellow",
    style: {
      "align-self": "flex-end",
      order: "2"
    }
  },
  {
    after: "}",
    before: "#pond {\n  display: flex;\n",
    board: "ygggggr",
    instructions: {
      en:
        "<p>Oh no! The frogs are all squeezed onto a single row of lilypads. Spread them out using the <code>flex-wrap</code> property, which accepts the following values:</p><ul><li><code>nowrap</code>: Every item is fit to a single line.</li><li><code>wrap</code>: Items wrap around to additional lines.</li><li><code>wrap-reverse</code>: Items wrap around to additional lines in reverse.</li></ul>"
    },
    name: "flex-wrap 1",
    style: {
      "flex-wrap": "wrap"
    }
  },
  {
    after: "}",
    before: "#pond {\n  display: flex;\n",
    board: "gggggrrrrryyyyy",
    instructions: {
      en:
        "<p>Help this army of frogs form three orderly columns using a combination of <code>flex-direction</code> and <code>flex-wrap</code>.</p>"
    },
    name: "flex-wrap 2",
    style: {
      "flex-direction": "column",
      "flex-wrap": "wrap"
    }
  },
  {
    after: "}",
    before: "#pond {\n  display: flex;\n",
    board: "gggggrrrrryyyyy",
    instructions: {
      en:
        "<p>The two properties <code>flex-direction</code> and <code>flex-wrap</code> are used so often together that the shorthand property <code>flex-flow</code> was created to combine them. This shorthand property accepts the value of one of the two properties separated by a space.</p><p>For example, you can use <code>flex-flow: row wrap</code> to set rows and wrap them.</p><p>Try using <code>flex-flow</code> to repeat the previous level.</p>"
    },
    name: "flex-flow 1",
    style: {
      "flex-flow": "column wrap"
    }
  },
  {
    after: "}",
    before:
      "#pond {\n  display: flex;\n  flex-wrap: wrap;\n",
    board: "ggggggggggggggg",
    classes: {
      "#pond, #background": "wrap"
    },
    instructions: {
      en:
        "<p>The frogs are spread all over the pond, but the lilypads are bunched at the top. You can use <code>align-content</code> to set how multiple lines are spaced apart from each other. This property takes the following values:</p><ul><li><code>flex-start</code>: Lines are packed at the top of the container.</li><li><code>flex-end</code>: Lines are packed at the bottom of the container.</li><li><code>center</code>: Lines are packed at the vertical center of the container.</li><li><code>space-between</code>: Lines display with equal spacing between them.</li><li><code>space-around</code>: Lines display with equal spacing around them.</li><li><code>stretch</code>: Lines are stretched to fit the container.</li></ul><p>This can be confusing, but <code>align-content</code> determines the spacing between lines, while <code>align-items</code> determines how the items as a whole are aligned within the container. When there is only one line, <code>align-content</code> has no effect.</p>"
    },
    name: "align-content 1",
    style: {
      "align-content": "flex-start"
    }
  },
  {
    after: "}",
    before:
      "#pond {\n  display: flex;\n  flex-wrap: wrap;\n",
    board: "ggggggggggggggg",
    classes: {
      "#pond, #background": "wrap"
    },
    instructions: {
      en:
        "<p>Now the current has bunched the lilypads at the bottom. Use <code>align-content</code> to guide the frogs there.</p>"
    },
    name: "align-content 2",
    style: {
      "align-content": "flex-end"
    }
  },
  {
    after: "}",
    before:
      "#pond {\n  display: flex;\n  flex-wrap: wrap;\n",
    board: "rgggyrgggyrgggy",
    classes: {
      "#pond, #background": "wrap"
    },
    instructions: {
      en:
        "<p>The frogs have had a party, but it is time to go home. Use a combination of <code>flex-direction</code> and <code>align-content</code> to get them to their lilypads.</p>"
    },
    name: "align-content 3",
    style: {
      "align-content": "center",
      "flex-direction": "column-reverse"
    }
  },
  {
    after: "}",
    before: "#pond {\n  display: flex;\n",
    board: "rggggyy",
    instructions: {
      en:
        '<p>Bring the frogs home one last time by using the CSS properties you\'ve learned:</p><ul><li><code>justify-content</code></li><li><code>align-items</code></li><li><code>flex-direction</code></li><li><code>order</code></li><li><code>align-self</code></li><li><code>flex-wrap</code></li><li><code>flex-flow</code></li><li><code>align-content</code><img src="https://code.org/api/hour/finish_flexbox_froggy.png"></li></ul>'
    },
    name: "align-content 4",
    style: {
      "align-content": "space-between",
      "flex-direction": "column-reverse",
      "flex-wrap": "wrap-reverse",
      "justify-content": "center"
    }
  }
];
