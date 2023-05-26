const {createApp} = Vue;

createApp({
    data(){
        return {
            ora: new Date(Date.now()).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
            ricerca:'',
            indiceChat: 0,
            testoMessaggio: '',
            indiceDropMenu:'',
            classShow:'',
            dBlock:'',
            dNone:'',
            contacts: [
                {
                    name: 'Michele',
                    avatar: './img/avatar_1.png',
                    visible: true,
                    messages: [
                        {
                            date: '15:30',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '15:50',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '16:15',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: './img/avatar_2.png',
                    visible: true,
                    messages: [
                        {
                            date: '16:30',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '16:30',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '16:35',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './img/avatar_3.png',
                    visible: true,
                    messages: [
                        {
                            date: '10:10',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '10:20',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '16:15',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: './img/avatar_4.png',
                    visible: true,
                    messages: [
                        {
                            date: '15:30',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '15:50',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: './img/avatar_5.png',
                    visible: true,
                    messages: [
                        {
                            date: '15:30',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '15:50',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: './img/avatar_6.png',
                    visible: true,
                    messages: [
                        {
                            date: '15:30',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '15:50',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '15:51',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: './img/avatar_7.png',
                    visible: true,
                    messages: [
                        {
                            date: '15:30',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '15:50',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: './img/avatar_8.png',
                    visible: true,
                    messages: [
                        {
                            date: '15:30',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '15:50',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '15:51',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ],
            frasiRisposteRandom: [
                "Angelica formalizza le masse interarticolari così noi riteniamo i ricordi economicistici.",
                "L'angoli è l'attività vissuta delle vite innocenti ed è facile come contare fino a 10.",
                "La condizione è il blues contadino di un gabbiano eccitato infatti per me è una sorpresa.",
                "La campagna è la Francia simbolica di un' avventura dodicesima , ebbene, tutto il mondo è paese.",
                "Il mercato è l'esempio morenico di un autista soggetto ma vorrei averne una conferma definitiva.",
                "L'impressione è tra le aziende vanitose di un attore affranto ma nella vita non si può mai sapere.",
                "I fatti sono la guerra caratteristica di un episodio record a patto che non cambi qualcosa nei prossimi mesi."
            ]   
        }
    },
    methods: {
        changeChat(indice){
            this.indiceChat=indice;
        },
        sendMessage(){
            const newMessage = {
                date: this.ora,
                message: this.testoMessaggio,
                status: 'sent'
            }
            if(newMessage.message !== ''){
                this.contacts[this.indiceChat].messages.push(newMessage);
                setTimeout(() => {
                    const returnMessage = {
                        date: this.ora,
                        message: this.frasiRisposteRandom[this.numRandLunghezzaArray(this.frasiRisposteRandom)],
                        status: 'received'
                    }
                    this.contacts[this.indiceChat].messages.push(returnMessage);
                }, 1000);
            }
            this.testoMessaggio = ''
            this.classShow = ''
            this.dNone = ''
        },
        searchChat(){
            this.contacts.forEach(element => {
                if (!element.name.includes(this.ricerca)) {
                    element.visible = false
                }
            });
        },
        deleteMessage(indice){
            this.contacts[this.indiceChat].messages.splice(indice, 1)
        },
        showDropMenu(indice){
            this.indiceDropMenu=indice
            this.classShow = 'active'    
        },
        numRandLunghezzaArray(nomeArray){
            return Math.round(Math.random() * (nomeArray.length - 1))
        },
        changeDisplay(){
            if (this.testoMessaggio !== '') {
                this.classShow = 'active'
                this.dNone = 'none' 
            } else {
                this.classShow = ''
                this.dNone = ''
            }
        },
        showDeleteMenu(){
            this.dBlock='active'
        },
        deleteAllMessage(){
            this.contacts[this.indiceChat].messages = []
            this.dBlock=''
        },
        deleteChat(){
            this.contacts[this.indiceChat].visible = false
            this.indiceChat++
            this.dBlock=''
        }
    }
}).mount('#app');