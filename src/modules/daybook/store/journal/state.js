
//  Es donde se almacena la informacion y es reactivo

export default () => ({
    isLoading: true,
    entries: [
        {
           id: new Date().getTime(),
           date: new Date().toDateString(),
           text: 'Aliquip ipsum esse ipsum excepteur veniam amet labore consequat do. Sunt ad dolor incididunt officia deserunt incididunt ex. Exercitation ut culpa non velit pariatur exercitation ex elit irure. Non anim enim aliquip ea ut adipisicing exercitation. Sint Lorem ad enim reprehenderit Lorem laborum. Cupidatat proident pariatur mollit eiusmod et ea sint ullamco reprehenderit culpa et commodo magna anim.',
           picture: null
        },

        {
            id: new Date().getTime() + 1000,
            date: new Date().toDateString(),
            text: 'Lorem eu fugiat nostrud sit reprehenderit proident commodo amet. Qui velit est ut amet. Officia sint excepteur laboris id mollit sint pariatur enim ut. In pariatur id labore Lorem exercitation irure laborum ullamco commodo qui sunt pariatur aute.',
            picture: null
         },

         {
            id: new Date().getTime() + 2000,
            date: new Date().toDateString(),
            text: 'Velit anim minim deserunt cillum duis laboris magna aliquip eu ipsum tempor non. Deserunt labore adipisicing irure quis officia in anim irure magna excepteur quis fugiat magna. Amet adipisicing non ut cillum ullamco anim esse elit ut in.',
            picture: null
         },
    ]
})