export default {
    name: 'src-componentes-formulario',
    components: {},
    props: [],
    data () {
      return {
        datos : this.getInicialData(),
      }
    },
    computed: {
  
    },
    mounted () {
  
    },
    methods: {
      getInicialData() {
        return {
          nombreCompleto: null,
          edad: null,
          email: null
        }
      },
      enviar() {
        console.log({...this.datos})
        this.datos = this.getInicialData()
      }
    }
  }
  
  
  