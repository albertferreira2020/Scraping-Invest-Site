var sql = require("mssql");
var scrap = require('scrap');

const fileconfig = require("./config.js");
const config = fileconfig.config
const filelist = require("./list.js"); 
const list = filelist.list

var ATIVO



const hora = Date().slice(16,21);
console.log(hour);

function formatnumber(v){
    v = v.trim()
    if(v == null || v=='null' || v == undefined || v == '' || v == '-' || v == '--' || (v.length == 1 && v < 1) ){
    return 0
    }else{
    return v.replace('%','').replace(/,/g,'.')
    }
}

var i = 0
console.log('Iniciando...')
function Insert () {

    ATIVO = list[i]


        scrap('https://www.investsite.com.br/principais_indicadores.php?cod_negociacao='+ATIVO, function(err, $) {
            

            var INDICADORES=[]
            var caption = ''
            let promise1 = new Promise((resolve, reject) => {
 
                    $('tr').each(function() {
                    INDICADORES.push(this.text())
 

                });
                resolve(INDICADORES)
            }).then(()=>{


                var CEBIT = 1
                var RL = 1
                var RB = 1
                var LL = 1
                var RPS = 1
                var RIF = 1
                var RBIF = 1
                var RO = 1
                var ORD = 1

                var Empresa = '-'
                ,Razao_Social = '-'
                ,Situacao_Registro = '-'
                ,Situacao_Emissor = '-'
                ,Segmento_de_listgem = '-'
                ,Atividade = '-'
                ,Acao = '-'
                ,Data_Cotacao = '-'
                ,Tipo_de_Acao = '-'
                ,ultimo_Fechamento = '-'
                ,Fator_de_Cotacao = '-'
                ,Volume_Financeiro = '-'
                ,ultimo_Demonstrativo = '-'
                ,Setor = '-'
                ,Subsetor = '-'
                ,Segmento = '-'
                ,Part_Indices = '-'
                ,Preco_Lucro = '-'
                ,Preco_VPA = '-'
                ,Preco_Receita_Liquida = '-'
                ,Preco_FCO = '-'
                ,Preco_FCF = '-'
                ,Preco_Ativo_Total = '-'
                ,Preco_EBIT = '-'
                ,Preco_Capital_Giro = '-'
                ,Preco_NCAV = '-'
                ,EV_EBIT = '-'
                ,EV_EBITDA = '-'
                ,EV_Receita_Liquida = '-'
                ,EV_FCO = '-'
                ,EV_FCF = '-'
                ,EV_Ativo_Total = '-'
                ,Receita_Liquida = '-'
                ,Resultado_Bruto = '-'
                ,EBIT = '-'
                ,Depre_Amort = '-'
                ,EBITDA = '-'
                ,Lucro_Liquido = '-'
                ,Receita_Liquida_Tri = '-'
                ,Resultado_Bruto_Tri = '-'
                ,EBIT_Tri = '-'
                ,Lucro_Liquido_Tri = '-'
                ,Menor_Preco_52_sem = '-'
                ,Maior_Preco_52_sem = '-'
                ,Variacao_2020 = '-'
                ,Variacao_1_ano = '-'
                ,Variacao_2_anos_total = '-'
                ,Variacao_2_anos_anual = '-'
                ,Variacao_3_anos_total = '-'
                ,Variacao_3_anos_anual = '-'
                ,Variacao_4_anos_total = '-'
                ,Variacao_4_anos_anual = '-'
                ,Variacao_5_anos_total = '-'
                ,Variacao_5_anos_anual = '-'
                ,Volume_Diario_Medio_3_meses = '-'
                ,Retorno_s__Capital_Tangivel = '-'
                ,Retorno_s__Capital_Investido = '-'
                ,Retorno_s__Patrimonio_Liquido = '-'
                ,Retorno_s__Ativo = '-'
                ,Margem_Bruta = '-'
                ,Margem_Liquida = '-'
                ,Margem_EBIT = '-'
                ,Dividend_Yield = '-'
                ,Giro_do_Ativo = '-'
                ,Alavancagem_Financeira = '-'
                ,Passivo_Patrimonio_Liquido = '-'
                ,Market_Cap = '-'
                ,Enterprise_Value = '-'
                ,Lucro_Acao = '-'
                ,Valor_Patrimonial_da_Acao = '-'
                ,Disponibilidades = '-'
                ,Ativo_Total = '-'
                ,Divida_CP = '-'
                ,Divida_LP = '-'
                ,Divida_Bruta = '-'
                ,Divida_Liquida = '-'
                ,Patrimonio_Liquido = '-'
                ,Quant_Acoes_Ordinarias = '-'
                ,Quant_Acoes_Preferenciais = '-'
                ,Quant_Acoes_Totais = '-'
                ,Rec_Prest_Serv = '-'
                ,Rec_Interm_Financ = '-'
                ,Res_Bruto_Interm_Financ = '-'
                ,Rec_Interm_Financ_Tri = '-'
                ,Res_Bruto_Interm_Financ_tri = '-'
                ,Rec_Prest_Serv_Tri = '-'

                ,Rec_Op = '-'
                ,Rec_Desp_Op = '-'
                ,Rec_Op_Tri = '-'
                ,Rec_Desp_Op_Tri = '-'
               


                for(x=0;x<INDICADORES.length;x++){




                  
                if(INDICADORES[x].search('Empresa') == 0){Empresa = INDICADORES[x].toString().replace('Empresa','') }
                if(INDICADORES[x].search('Razão Social') == 0){Razao_Social = INDICADORES[x].toString().replace('Razão Social','') }
                if(INDICADORES[x].search('Situação Registro') == 0){Situacao_Registro = INDICADORES[x].toString().replace('Situação Registro','') }
                if(INDICADORES[x].search('Situação Emissor') == 0){Situacao_Emissor = INDICADORES[x].toString().replace('Situação Emissor','') }
                if(INDICADORES[x].search('Segmento de listgem') == 0){Segmento_de_listgem = INDICADORES[x].toString().replace('Segmento de listgem','') }
                if(INDICADORES[x].search('Atividade') == 0){Atividade = INDICADORES[x].toString().replace('Atividade','') }
                if(INDICADORES[x].search('Ação') == 0){Acao = INDICADORES[x].toString().replace('Ação','') }
                if(INDICADORES[x].search('Data Cotação') == 0){Data_Cotacao = INDICADORES[x].toString().replace('Data Cotação','') }
                if(INDICADORES[x].search('Tipo de Ação') == 0){Tipo_de_Acao = INDICADORES[x].toString().replace('Tipo de Ação','') }
                if(INDICADORES[x].search('Último Fechamento') == 0){ultimo_Fechamento = INDICADORES[x].toString().replace('Último Fechamento','') }
                if(INDICADORES[x].search('Fator de Cotação') == 0){Fator_de_Cotacao = INDICADORES[x].toString().replace('Fator de Cotação','') }
                if(INDICADORES[x].search('Volume Financeiro') == 0){Volume_Financeiro = INDICADORES[x].toString().replace('Volume Financeiro','') }
                if(INDICADORES[x].search('Último Demonstrativo') == 0){ultimo_Demonstrativo = INDICADORES[x].toString().replace('Último Demonstrativo','') }
                if(INDICADORES[x].search('Setor') == 0){Setor = INDICADORES[x].toString().replace('Setor','') }
                if(INDICADORES[x].search('Subsetor') == 0){Subsetor = INDICADORES[x].toString().replace('Subsetor','') }
                if(INDICADORES[x].search('Segmento') == 0){Segmento = INDICADORES[x].toString().replace('Segmento','') }
                if(INDICADORES[x].search('Part. Índices') == 0){Part_Indices = INDICADORES[x].toString().replace('Part. Índices','') }
                if(INDICADORES[x].search('Preço/Lucro') == 0){Preco_Lucro = INDICADORES[x].toString().replace('Preço/Lucro','') }
                if(INDICADORES[x].search('Preço/VPA') == 0){Preco_VPA = INDICADORES[x].toString().replace('Preço/VPA','') }
                if(INDICADORES[x].search('Preço/Receita Líquida') == 0){Preco_Receita_Liquida = INDICADORES[x].toString().replace('Preço/Receita Líquida','') }
                if(INDICADORES[x].search('Preço/FCO') == 0){Preco_FCO = INDICADORES[x].toString().replace('Preço/FCO','') }
                if(INDICADORES[x].search('Preço/FCF') == 0){Preco_FCF = INDICADORES[x].toString().replace('Preço/FCF','') }
                if(INDICADORES[x].search('Preço/Ativo Total') == 0){Preco_Ativo_Total = INDICADORES[x].toString().replace('Preço/Ativo Total','') }
                if(INDICADORES[x].search('Preço/EBIT') == 0){Preco_EBIT = INDICADORES[x].toString().replace('Preço/EBIT','') }
                if(INDICADORES[x].search('Preço/Capital Giro') == 0){Preco_Capital_Giro = INDICADORES[x].toString().replace('Preço/Capital Giro','') }
                if(INDICADORES[x].search('Preço/NCAV') == 0){Preco_NCAV = INDICADORES[x].toString().replace('Preço/NCAV','') }
                if(INDICADORES[x].search('EV/EBIT') == 0){EV_EBIT = INDICADORES[x].toString().replace('EV/EBIT','') }
                if(INDICADORES[x].search('EV/EBITDA') == 0){EV_EBITDA = INDICADORES[x].toString().replace('EV/EBITDA','') }
                if(INDICADORES[x].search('EV/Receita Líquida') == 0){EV_Receita_Liquida = INDICADORES[x].toString().replace('EV/Receita Líquida','') }
                if(INDICADORES[x].search('EV/FCO') == 0){EV_FCO = INDICADORES[x].toString().replace('EV/FCO','') }
                if(INDICADORES[x].search('EV/FCF') == 0){EV_FCF = INDICADORES[x].toString().replace('EV/FCF','') }
                if(INDICADORES[x].search('EV/Ativo Total') == 0){EV_Ativo_Total = INDICADORES[x].toString().replace('EV/Ativo Total','') }


                if(INDICADORES[x].search('Receita Líquida') == 0){
                    if (RL == 1){
                    Receita_Liquida = INDICADORES[x].toString().replace('Receita Líquida','') 
                    RL++
                    }
                }

                if(INDICADORES[x].search('Resultado Bruto') == 0){
                    if (RB == 1){
                    Resultado_Bruto = INDICADORES[x].toString().replace('Resultado Bruto','') 
                    RB++
                    }
                }


                if(INDICADORES[x].search('EBIT') == 0){
                    
                    if (CEBIT == 1){
                        EBIT = INDICADORES[x].toString().replace('EBIT','') 
                        CEBIT++
                    }
                    
                }

                if(INDICADORES[x].search('Depre/Amort') == 0){Depre_Amort = INDICADORES[x].toString().replace('Depre/Amort','') }
                if(INDICADORES[x].search('EBITDA') == 0){EBITDA = INDICADORES[x].toString().replace('EBITDA','') }



                if(INDICADORES[x].search('Lucro Líquido') == 0){
                    if (LL == 1){
                    Lucro_Liquido = INDICADORES[x].toString().replace('Lucro Líquido','') 
                    LL++
                }

                }


                if(INDICADORES[x].search('Receita Líquida') == 0){
                    if (RL == 2){                   
                    Receita_Liquida_Tri = INDICADORES[x].toString().replace('Receita Líquida','') 
                }

                }

                if(INDICADORES[x].search('Resultado Bruto') == 0){
                    if (RB == 2){
                    Resultado_Bruto_Tri = INDICADORES[x].toString().replace('Resultado Bruto','') 
                }

                }

                if(INDICADORES[x].search('EBIT') == 0){
                    
                    if (CEBIT == 2){
                    EBIT_Tri = INDICADORES[x].toString().replace('EBIT','') 
                    }
                    
                }



                if(INDICADORES[x].search('Lucro Líquido') == 0){
                    if (LL == 2){
                    Lucro_Liquido_Tri = INDICADORES[x].toString().replace('Lucro Líquido','') 
                }

                }



                if(INDICADORES[x].search('Menor Preço 52 sem.') == 0){Menor_Preco_52_sem = INDICADORES[x].toString().replace('Menor Preço 52 sem.','') }
                if(INDICADORES[x].search('Maior Preço 52 sem.') == 0){Maior_Preco_52_sem = INDICADORES[x].toString().replace('Maior Preço 52 sem.','') }
                if(INDICADORES[x].search('Variação 2020') == 0){Variacao_2020 = INDICADORES[x].toString().replace('Variação 2020','') }
                if(INDICADORES[x].search('Variação 1 ano') == 0){Variacao_1_ano = INDICADORES[x].toString().replace('Variação 1 ano','') }
                if(INDICADORES[x].replace(/\)/g,'').replace(/\(/g,'').search('Variação 2 anos total') == 0){Variacao_2_anos_total = INDICADORES[x].toString().replace('Variação 2 anos (total)','') }
                if(INDICADORES[x].replace(/\)/g,'').replace(/\(/g,'').search('Variação 2 anos (anual)') == 0){Variacao_2_anos_anual = INDICADORES[x].toString().replace('Variação 2 anos (anual)','') }
                if(INDICADORES[x].replace(/\)/g,'').replace(/\(/g,'').search('Variação 3 anos (total)') == 0){Variacao_3_anos_total = INDICADORES[x].toString().replace('Variação 3 anos (total)','') }
                if(INDICADORES[x].replace(/\)/g,'').replace(/\(/g,'').search('Variação 3 anos (anual)') == 0){Variacao_3_anos_anual = INDICADORES[x].toString().replace('Variação 3 anos (anual)','') }
                if(INDICADORES[x].replace(/\)/g,'').replace(/\(/g,'').search('Variação 4 anos (total)') == 0){Variacao_4_anos_total = INDICADORES[x].toString().replace('Variação 4 anos (total)','') }
                if(INDICADORES[x].replace(/\)/g,'').replace(/\(/g,'').search('Variação 4 anos (anual)') == 0){Variacao_4_anos_anual = INDICADORES[x].toString().replace('Variação 4 anos (anual)','') }
                if(INDICADORES[x].replace(/\)/g,'').replace(/\(/g,'').search('Variação 5 anos (total)') == 0){Variacao_5_anos_total = INDICADORES[x].toString().replace('Variação 5 anos (total)','') }
                if(INDICADORES[x].replace(/\)/g,'').replace(/\(/g,'').search('Variação 5 anos (anual)') == 0){Variacao_5_anos_anual = INDICADORES[x].toString().replace('Variação 5 anos (anual)','') }
                if(INDICADORES[x].replace(/\)/g,'').replace(/\(/g,'').search('Volume Diário Médio (3 meses)') == 0){Volume_Diario_Medio_3_meses = INDICADORES[x].toString().replace('Volume Diário Médio (3 meses)','') }
                if(INDICADORES[x].search('Retorno s/ Capital Tangível') == 0){Retorno_s__Capital_Tangivel = INDICADORES[x].toString().replace('Retorno s/ Capital Tangível','') }
                if(INDICADORES[x].search('Retorno s/ Capital Investido') == 0){Retorno_s__Capital_Investido = INDICADORES[x].toString().replace('Retorno s/ Capital Investido','') }
                if(INDICADORES[x].search('Retorno s/ Patrimônio Líquido') == 0){Retorno_s__Patrimonio_Liquido = INDICADORES[x].toString().replace('Retorno s/ Patrimônio Líquido','') }
                if(INDICADORES[x].search('Retorno s/ Ativo') == 0){Retorno_s__Ativo = INDICADORES[x].toString().replace('Retorno s/ Ativo','') }
                if(INDICADORES[x].search('Margem Bruta') == 0){Margem_Bruta = INDICADORES[x].toString().replace('Margem Bruta','') }
                if(INDICADORES[x].search('Margem Líquida') == 0){Margem_Liquida = INDICADORES[x].toString().replace('Margem Líquida','') }
                if(INDICADORES[x].search('Margem EBIT') == 0){Margem_EBIT = INDICADORES[x].toString().replace('Margem EBIT','') }
                if(INDICADORES[x].search('Dividend Yield') == 0){Dividend_Yield = INDICADORES[x].toString().replace('Dividend Yield','') }
                if(INDICADORES[x].search('Giro do Ativo') == 0){Giro_do_Ativo = INDICADORES[x].toString().replace('Giro do Ativo','') }
                if(INDICADORES[x].search('Alavancagem Financeira') == 0){Alavancagem_Financeira = INDICADORES[x].toString().replace('Alavancagem Financeira','') }
                if(INDICADORES[x].search('Passivo/Patrimônio Líquido') == 0){Passivo_Patrimonio_Liquido = INDICADORES[x].toString().replace('Passivo/Patrimônio Líquido','') }
                if(INDICADORES[x].search('Market Cap') == 0){Market_Cap = INDICADORES[x].toString().replace('Market Cap','') }
                if(INDICADORES[x].search('Enterprise Value') == 0){Enterprise_Value = INDICADORES[x].toString().replace('Enterprise Value','') }
                if(INDICADORES[x].search('Lucro/Ação') == 0){Lucro_Acao = INDICADORES[x].toString().replace('Lucro/Ação','') }
                if(INDICADORES[x].search('Valor Patrimonial da Ação') == 0){Valor_Patrimonial_da_Acao = INDICADORES[x].toString().replace('Valor Patrimonial da Ação','') }
                if(INDICADORES[x].search('Disponibilidades') == 0){Disponibilidades = INDICADORES[x].toString().replace('Disponibilidades','') }
                if(INDICADORES[x].search('Ativo Total') == 0){Ativo_Total = INDICADORES[x].toString().replace('Ativo Total','') }
                if(INDICADORES[x].search('Dívida CP') == 0){Divida_CP = INDICADORES[x].toString().replace('Dívida CP','') }
                if(INDICADORES[x].search('Dívida LP') == 0){Divida_LP = INDICADORES[x].toString().replace('Dívida LP','') }
                if(INDICADORES[x].search('Dívida Bruta') == 0){Divida_Bruta = INDICADORES[x].toString().replace('Dívida Bruta','') }
                if(INDICADORES[x].search('Dívida Líquida') == 0){Divida_Liquida = INDICADORES[x].toString().replace('Dívida Líquida','') }
                if(INDICADORES[x].search('Patrimônio Líquido') == 0){Patrimonio_Liquido = INDICADORES[x].toString().replace('Patrimônio Líquido','') }
                if(INDICADORES[x].search('Quant. Ações Ordinárias') == 0){Quant_Acoes_Ordinarias = INDICADORES[x].toString().replace('Quant. Ações Ordinárias','') }
                if(INDICADORES[x].search('Quant. Ações Preferenciais') == 0){Quant_Acoes_Preferenciais = INDICADORES[x].toString().replace('Quant. Ações Preferenciais','') }
                if(INDICADORES[x].search('Quant. Ações Totais') == 0){Quant_Acoes_Totais = INDICADORES[x].toString().replace('Quant. Ações Totais','') }
                
                if(INDICADORES[x].search('Rec. Prest. Serv.') == 0){
                    if(RPS == 1){
                    Rec_Prest_Serv = INDICADORES[x].toString().replace('Rec. Prest. Serv.','') 
                    RPS++
                    }
                }

                if(INDICADORES[x].search('Rec. Prest. Serv.') == 0){
                    if(RPS == 2){
                    Rec_Prest_Serv_Tri= INDICADORES[x].toString().replace('Rec. Prest. Serv.','') 
                    }
                }

                
                if(INDICADORES[x].search('Rec. Interm. Financ.') == 0){
                    if(RIF == 1){
                    Rec_Interm_Financ = INDICADORES[x].toString().replace('Rec. Interm. Financ.','') 
                    RIF++
                    }
                }

                if(INDICADORES[x].search('Rec. Interm. Financ.') == 0){
                    if(RIF == 2){
                    Rec_Interm_Financ_Tri= INDICADORES[x].toString().replace('Rec. Interm. Financ.','') 
                    }
                }

                
                if(INDICADORES[x].search('Res. Bruto Interm. Financ.') == 0){
                    if(RBIF == 1){
                    Res_Bruto_Interm_Financ = INDICADORES[x].toString().replace('Res. Bruto Interm. Financ.','') 
                    RBIF++
                    }
                }

                
                if(INDICADORES[x].search('Res. Bruto Interm. Financ.') == 0){
                    if(RBIF == 2){
                    Res_Bruto_Interm_Financ_tri= INDICADORES[x].toString().replace('Res. Bruto Interm. Financ.','') 
                    }
                }




                if(INDICADORES[x].search('Receitas das Operações') == 0){
                    if(RO == 1){
                    Rec_Op = INDICADORES[x].toString().replace('Receitas das Operações','') 
                    RO++
                    }
                }



                if(INDICADORES[x].search('Outras Receitas e Despesas Operacionais') == 0){
                    if(ORD == 1){
                    Rec_Desp_Op = INDICADORES[x].toString().replace('Outras Receitas e Despesas Operacionais','') 
                    ORD++
                    }
                }



                if(INDICADORES[x].search('Receitas das Operações') == 0){
                    if(RO == 2){
                    Rec_Op_Tri = INDICADORES[x].toString().replace('Receitas das Operações','') 
                    }
                }



                if(INDICADORES[x].search('Outras Receitas e Despesas Operacionais') == 0){
                    if(ORD == 2){
                    Rec_Desp_Op_Tri = INDICADORES[x].toString().replace('Outras Receitas e Despesas Operacionais','') 
                    }
                }




                }

 


                var conn = new sql.Connection(config);
                conn.connect().then(() => {
                var insert = new sql.Request(conn);   

 
                    
                    if(Empresa != undefined && Data_Cotacao != 'NA'){
       
                    insert.query(`INSERT INTO Indicadores 
                    (    ATIVO
                        ,Empresa
                        ,Razao_Social
                        ,Situacao_Registro
                        ,Situacao_Emissor
                        ,Segmento_de_listgem
                        ,Atividade
                        ,Acao
                        ,Data_Cotacao
                        ,Tipo_de_Acao
                        ,ultimo_Fechamento
                        ,Fator_de_Cotacao
                        ,Volume_Financeiro
                        ,ultimo_Demonstrativo
                        ,Setor
                        ,Subsetor
                        ,Segmento
                        ,Part_Indices
                        ,Preco_Lucro
                        ,Preco_VPA
                        ,Preco_Receita_Liquida
                        ,Preco_FCO
                        ,Preco_FCF
                        ,Preco_Ativo_Total
                        ,Preco_EBIT
                        ,Preco_Capital_Giro
                        ,Preco_NCAV
                        ,EV_EBIT
                        ,EV_EBITDA
                        ,EV_Receita_Liquida
                        ,EV_FCO
                        ,EV_FCF
                        ,EV_Ativo_Total
                        ,Receita_Liquida
                        ,Resultado_Bruto
                        ,EBIT
                        ,Depre_Amort
                        ,EBITDA
                        ,Lucro_Liquido
                        ,Receita_Liquida_Tri
                        ,Resultado_Bruto_Tri
                        ,EBIT_Tri
                        ,Lucro_Liquido_Tri
                        ,Menor_Preco_52_sem
                        ,Maior_Preco_52_sem
                        ,Variacao_2020
                        ,Variacao_1_ano
                        ,Variacao_2_anos_total
                        ,Variacao_2_anos_anual
                        ,Variacao_3_anos_total
                        ,Variacao_3_anos_anual
                        ,Variacao_4_anos_total
                        ,Variacao_4_anos_anual
                        ,Variacao_5_anos_total
                        ,Variacao_5_anos_anual
                        ,Volume_Diario_Medio_3_meses
                        ,Retorno_s__Capital_Tangivel
                        ,Retorno_s__Capital_Investido
                        ,Retorno_s__Patrimonio_Liquido
                        ,Retorno_s__Ativo
                        ,Margem_Bruta
                        ,Margem_Liquida
                        ,Margem_EBIT
                        ,Dividend_Yield
                        ,Giro_do_Ativo
                        ,Alavancagem_Financeira
                        ,Passivo_Patrimonio_Liquido
                        ,Market_Cap
                        ,Enterprise_Value
                        ,Lucro_Acao
                        ,Valor_Patrimonial_da_Acao
                        ,Disponibilidades
                        ,Ativo_Total
                        ,Divida_CP
                        ,Divida_LP
                        ,Divida_Bruta
                        ,Divida_Liquida
                        ,Patrimonio_Liquido
                        ,Quant_Acoes_Ordinarias
                        ,Quant_Acoes_Preferenciais
                        ,Quant_Acoes_Totais
                        ,Rec_Prest_Serv
                        ,Rec_Interm_Financ
                        ,Res_Bruto_Interm_Financ
                        ,Rec_Interm_Financ_Tri
                        ,Res_Bruto_Interm_Financ_tri
                        ,Rec_Prest_Serv_Tri
                        ,Rec_Op
                        ,Rec_Desp_Op
                        ,Rec_Op_Tri
                        ,Rec_Desp_Op_Tri                        
                        )
                    VALUES
                        (
                            '`+ATIVO+`',
                            '`+Empresa+`',
                            '`+Razao_Social+`',
                            '`+Situacao_Registro+`',
                            '`+Situacao_Emissor+`',
                            '`+Segmento_de_listgem+`',
                            '`+Atividade+`',
                            '`+Acao+`',
                            '`+Data_Cotacao+`',
                            '`+Tipo_de_Acao+`',
                            '`+ultimo_Fechamento+`',
                            '`+Fator_de_Cotacao+`',
                            '`+Volume_Financeiro+`',
                            '`+ultimo_Demonstrativo+`',
                            '`+Setor+`',
                            '`+Subsetor+`',
                            '`+Segmento+`',
                            '`+Part_Indices+`',
                            '`+Preco_Lucro+`',
                            '`+Preco_VPA+`',
                            '`+Preco_Receita_Liquida+`',
                            '`+Preco_FCO+`',
                            '`+Preco_FCF+`',
                            '`+Preco_Ativo_Total+`',
                            '`+Preco_EBIT+`',
                            '`+Preco_Capital_Giro+`',
                            '`+Preco_NCAV+`',
                            '`+EV_EBIT+`',
                            '`+EV_EBITDA+`',
                            '`+EV_Receita_Liquida+`',
                            '`+EV_FCO+`',
                            '`+EV_FCF+`',
                            '`+EV_Ativo_Total+`',
                            '`+Receita_Liquida+`',
                            '`+Resultado_Bruto+`',
                            '`+EBIT+`',
                            '`+Depre_Amort+`',
                            '`+EBITDA+`',
                            '`+Lucro_Liquido+`',
                            '`+Receita_Liquida_Tri+`',
                            '`+Resultado_Bruto_Tri+`',
                            '`+EBIT_Tri+`',
                            '`+Lucro_Liquido_Tri+`',
                            '`+Menor_Preco_52_sem+`',
                            '`+Maior_Preco_52_sem+`',
                            '`+Variacao_2020+`',
                            '`+Variacao_1_ano+`',
                            '`+Variacao_2_anos_total+`',
                            '`+Variacao_2_anos_anual+`',
                            '`+Variacao_3_anos_total+`',
                            '`+Variacao_3_anos_anual+`',
                            '`+Variacao_4_anos_total+`',
                            '`+Variacao_4_anos_anual+`',
                            '`+Variacao_5_anos_total+`',
                            '`+Variacao_5_anos_anual+`',
                            '`+Volume_Diario_Medio_3_meses+`',
                            '`+Retorno_s__Capital_Tangivel+`',
                            '`+Retorno_s__Capital_Investido+`',
                            '`+Retorno_s__Patrimonio_Liquido+`',
                            '`+Retorno_s__Ativo+`',
                            '`+Margem_Bruta+`',
                            '`+Margem_Liquida+`',
                            '`+Margem_EBIT+`',
                            '`+Dividend_Yield+`',
                            '`+Giro_do_Ativo+`',
                            '`+Alavancagem_Financeira+`',
                            '`+Passivo_Patrimonio_Liquido+`',
                            '`+Market_Cap+`',
                            '`+Enterprise_Value+`',
                            '`+Lucro_Acao+`',
                            '`+Valor_Patrimonial_da_Acao+`',
                            '`+Disponibilidades+`',
                            '`+Ativo_Total+`',
                            '`+Divida_CP+`',
                            '`+Divida_LP+`',
                            '`+Divida_Bruta+`',
                            '`+Divida_Liquida+`',
                            '`+Patrimonio_Liquido+`',
                            '`+Quant_Acoes_Ordinarias+`',
                            '`+Quant_Acoes_Preferenciais+`',
                            '`+Quant_Acoes_Totais+`',
                            '`+Rec_Prest_Serv+`',
                            '`+Rec_Interm_Financ+`',
                            '`+Res_Bruto_Interm_Financ+`',
                            '`+Rec_Interm_Financ_Tri+`',
                            '`+Res_Bruto_Interm_Financ_tri+`',
                            '`+Rec_Prest_Serv_Tri+`',
                            '`+Rec_Op+`',
                            '`+Rec_Desp_Op+`',
                            '`+Rec_Op_Tri+`',
                            '`+Rec_Desp_Op_Tri+`'
 

                            )
                        `);

                    }

                 

                        if(i<list.length-1){i++;Insert ();console.log(ATIVO)}else{console.log('Fim do Processamento...');console.log( Date().slice(16,21) );}
                    
                    conn.close();
                });
              
 
                });
              


        })



}    



Insert ()
  
