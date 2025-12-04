-- ==========================================
-- TABELAS AUXILIARES / LOOKUPS
-- ==========================================
CREATE TABLE sis_grupo (
    id INT NOT NULL PRIMARY KEY,
    nome VARCHAR(50) NOT NULL
);

CREATE TABLE sis_contrato (
    id INT NOT NULL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    texto TEXT
);

CREATE TABLE sis_vendedor (
    id INT NOT NULL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL
);

CREATE TABLE sis_tecnico (
    id INT NOT NULL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL
);

CREATE TABLE sis_plano (
    id INT NOT NULL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    valor DECIMAL(10, 2),
    download VARCHAR(20),
    upload VARCHAR(20),
    bloqueado_plano_id INT, -- Plano quando bloqueado
    turbo_plano_id INT, -- Plano turbo
    down_plano_id INT, -- Plano reduzido por tráfego
    plano_15_dias_id INT, -- Plano após 15 dias de atraso
    limite_down_mb INT -- Limite de tráfego antes de reduzir
);

-- ==========================================
-- TABELA PRINCIPAL DE CLIENTES
-- ==========================================
CREATE TABLE sis_cliente (
    id INT NOT NULL PRIMARY KEY,
    -- Dados Pessoais / Identificação
    nome VARCHAR(255) NOT NULL,
    nome_resumido VARCHAR(100),
    tipo_pessoa CHAR(1) DEFAULT 'F', -- F ou J
    cpf_cnpj VARCHAR(20),
    rg_ie VARCHAR(20),
    nascimento DATE,
    sexo CHAR(1),
    estado_civil VARCHAR(20),
    naturalidade VARCHAR(50),
    nome_pai VARCHAR(100),
    nome_mae VARCHAR(100),
    nome_responsavel VARCHAR(100),
    -- Contato
    email VARCHAR(100),
    telefone VARCHAR(20),
    celular VARCHAR(20),
    operadora VARCHAR(20),
    celular2 VARCHAR(20),
    operadora2 VARCHAR(20),
    recebe_email CHAR(1) DEFAULT 'S',
    recebe_sms CHAR(1) DEFAULT 'S',
    -- Acesso / Login
    login VARCHAR(50) NOT NULL,
    senha VARCHAR(50),
    ativo CHAR(1) DEFAULT 's',
    acessos_simultaneos CHAR(1) DEFAULT 'N',
    ramal VARCHAR(50),
    acessa_central CHAR(1) DEFAULT 'S',
    altera_senha_central CHAR(1) DEFAULT 'S',
    disco_virtual_mb INT DEFAULT 0,
    -- Endereço Residencial / Instalação
    endereco VARCHAR(255),
    numero VARCHAR(20),
    complemento VARCHAR(100),
    bairro VARCHAR(100),
    cidade VARCHAR(100),
    uf CHAR(2),
    cep VARCHAR(10),
    codigo_ibge VARCHAR(20),
    coordenadas VARCHAR(50),
    ponto_referencia VARCHAR(255),
    -- Endereço de Cobrança
    end_cobranca_mesmo_res CHAR(1) DEFAULT 'S',
    end_cobranca_endereco VARCHAR(255),
    end_cobranca_numero VARCHAR(20),
    end_cobranca_complemento VARCHAR(100),
    end_cobranca_bairro VARCHAR(100),
    end_cobranca_cidade VARCHAR(100),
    end_cobranca_uf CHAR(2),
    end_cobranca_cep VARCHAR(10),
    -- Rede Sem Fio (WiFi)
    wifi_ssid VARCHAR(50),
    wifi_senha VARCHAR(50),
    wifi_mac_acl CHAR(1) DEFAULT 'N', -- Access-List
    wifi_criptografia VARCHAR(10), -- WEP, WPA, etc
    -- Dados Técnicos de Conexão
    ip_tipo VARCHAR(10) DEFAULT 'pool', -- Fixo ou Pool
    ip_endereco VARCHAR(15),
    ipv6_pool VARCHAR(50),
    ip_fallback VARCHAR(15),
    mac VARCHAR(17),
    interface_ramal VARCHAR(50),
    -- Infraestrutura (FTTH/Rede)
    armario_olt VARCHAR(50),
    porta_olt VARCHAR(50),
    caixa_hermetica VARCHAR(50),
    porta_splitter VARCHAR(50),
    onu_ont VARCHAR(50),
    switch_nome VARCHAR(50),
    -- Financeiro / Contratual
    plano_id INT,
    grupo_id INT,
    contrato_id INT,
    vendedor_id INT,
    tecnico_id INT, -- Instalador
    vencimento_dia INT DEFAULT 10,
    tipo_cobranca VARCHAR(20) DEFAULT 'titulo', -- Titulo ou Carne
    isento_mensalidade CHAR(1) DEFAULT 'N',
    conta_boleto VARCHAR(50),
    conta_cartao VARCHAR(50),
    nota_fiscal CHAR(1) DEFAULT 'N',
    pg_corte CHAR(1) DEFAULT 'S',
    pg_aviso CHAR(1) DEFAULT 'S',
    -- Anatel
    incluir_dici CHAR(1) DEFAULT 'S',
    local_dici VARCHAR(20) DEFAULT 'urbano',
    -- Auditoria
    data_cadastro DATETIME,
    observacao TEXT
);

-- ==========================================
-- EQUIPAMENTOS DO CLIENTE
-- ==========================================
CREATE TABLE sis_cliente_equipamento (
    id INT NOT NULL PRIMARY KEY,
    cliente_id INT NOT NULL,
    tipo VARCHAR(50), -- Comodato, Proprio
    modelo VARCHAR(100),
    mac_serial VARCHAR(50),
    data_instalacao DATE,
    ativo CHAR(1) DEFAULT 'S'
);

-- ==========================================
-- MÓDULOS DO SISTEMA (Chamados, Financeiro, etc)
-- ==========================================
-- Tabela de Chamados de Suporte
CREATE TABLE sis_chamado (
    id INT NOT NULL PRIMARY KEY,
    cliente_id INT NOT NULL,
    assunto VARCHAR(200),
    abertura DATETIME,
    fechamento DATETIME,
    status VARCHAR(50) DEFAULT 'aberto',
    tecnico_id INT, -- Link com tabela de tecnicos
    mensagem TEXT
);

-- Tabela Financeira / Títulos
CREATE TABLE sis_titulo (
    id INT NOT NULL PRIMARY KEY,
    cliente_id INT NOT NULL,
    nosso_numero VARCHAR(50),
    valor DECIMAL(10, 2),
    vencimento DATE,
    pagamento DATE,
    status VARCHAR(20) DEFAULT 'aberto',
    link_boleto VARCHAR(255)
);

-- Tabela de Instalações
CREATE TABLE sis_instalacao (
    id INT NOT NULL PRIMARY KEY,
    cliente_id INT NOT NULL,
    data_agendamento DATETIME,
    data_conclusao DATETIME,
    tecnico_id INT, -- Link com tabela de tecnicos
    status VARCHAR(50) DEFAULT 'pendente',
    obs TEXT
);

-- ==========================================
-- FREERADIUS (Tabelas do Sistema de Autenticação)
-- ==========================================
-- Tabela de Servidores NAS (Concentradores/MikroTik)
CREATE TABLE nas (
    id INT NOT NULL PRIMARY KEY,
    nasname VARCHAR(128) NOT NULL, -- IP do Concentrador
    shortname VARCHAR(32), -- Nome Curto
    type VARCHAR(30) DEFAULT 'other', -- Tipo (ex: mikrotik)
    ports INT,
    secret VARCHAR(60) NOT NULL, -- Senha Radius
    server VARCHAR(64),
    community VARCHAR(50), -- Comunidade SNMP
    description VARCHAR(200) -- Descrição
);

-- Tabela de Verificação de Usuário (Login/Senha)
CREATE TABLE radcheck (
    id INT NOT NULL PRIMARY KEY,
    username VARCHAR(64) NOT NULL DEFAULT '', -- Login do Cliente
    attribute VARCHAR(64) NOT NULL DEFAULT '', -- Atributo (ex: Cleartext-Password)
    op CHAR(2) NOT NULL DEFAULT '==', -- Operador
    value VARCHAR(253) NOT NULL DEFAULT '' -- Valor (ex: a senha)
);

-- Tabela de Respostas (Atributos entregues ao logar)
CREATE TABLE radreply (
    id INT NOT NULL PRIMARY KEY,
    username VARCHAR(64) NOT NULL DEFAULT '', -- Login do Cliente
    attribute VARCHAR(64) NOT NULL DEFAULT '', -- Atributo (ex: Framed-IP-Address)
    op CHAR(2) NOT NULL DEFAULT '=',
    value VARCHAR(253) NOT NULL DEFAULT '' -- Valor
);

-- Tabela de Logs de Conexão (Accounting)
CREATE TABLE radacct (
    radacctid BIGINT NOT NULL PRIMARY KEY,
    acctsessionid VARCHAR(64) NOT NULL DEFAULT '', -- ID da Sessão
    acctuniqueid VARCHAR(32) NOT NULL DEFAULT '',
    username VARCHAR(64) NOT NULL DEFAULT '', -- Login
    groupname VARCHAR(64) NOT NULL DEFAULT '',
    realm VARCHAR(64) DEFAULT '',
    nasipaddress VARCHAR(15) NOT NULL DEFAULT '', -- IP do Concentrador
    nasportid VARCHAR(15),
    nasporttype VARCHAR(32),
    acctstarttime DATETIME, -- Início da Conexão
    acctupdatetime DATETIME,
    acctstoptime DATETIME, -- Fim da Conexão
    acctinterval INT,
    acctsessiontime INT, -- Tempo Conectado (segundos)
    acctauthentic VARCHAR(32),
    connectinfo_start VARCHAR(50),
    connectinfo_stop VARCHAR(50),
    acctinputoctets BIGINT, -- Upload (bytes)
    acctoutputoctets BIGINT, -- Download (bytes)
    calledstationid VARCHAR(50) NOT NULL DEFAULT '',
    callingstationid VARCHAR(50) NOT NULL DEFAULT '', -- MAC Address
    acctterminatecause VARCHAR(32) NOT NULL DEFAULT '', -- Causa da Desconexão
    servicetype VARCHAR(32),
    framedprotocol VARCHAR(32),
    framedipaddress VARCHAR(15) NOT NULL DEFAULT '' -- IP Atribuído
);

-- Tabela de Grupos de Usuários
CREATE TABLE radusergroup (
    username VARCHAR(64) NOT NULL DEFAULT '',
    groupname VARCHAR(64) NOT NULL DEFAULT '',
    priority INT NOT NULL DEFAULT 1
);

-- ==========================================
-- RELACIONAMENTOS (FOREIGN KEYS)
-- ==========================================
-- Definindo as relações no final para facilitar a importação no draw.io
-- Relacionamentos da Tabela de Clientes
ALTER TABLE sis_cliente ADD FOREIGN KEY (plano_id) REFERENCES sis_plano (id);

ALTER TABLE sis_cliente ADD FOREIGN KEY (grupo_id) REFERENCES sis_grupo (id);

ALTER TABLE sis_cliente ADD FOREIGN KEY (contrato_id) REFERENCES sis_contrato (id);

ALTER TABLE sis_cliente ADD FOREIGN KEY (vendedor_id) REFERENCES sis_vendedor (id);

ALTER TABLE sis_cliente ADD FOREIGN KEY (tecnico_id) REFERENCES sis_tecnico (id);

-- Relacionamentos de Equipamentos
ALTER TABLE sis_cliente_equipamento ADD FOREIGN KEY (cliente_id) REFERENCES sis_cliente (id);

-- Relacionamentos de Chamados
ALTER TABLE sis_chamado ADD FOREIGN KEY (cliente_id) REFERENCES sis_cliente (id);

ALTER TABLE sis_chamado ADD FOREIGN KEY (tecnico_id) REFERENCES sis_tecnico (id);

-- Relacionamentos Financeiros
ALTER TABLE sis_titulo ADD FOREIGN KEY (cliente_id) REFERENCES sis_cliente (id);

-- Relacionamentos de Instalações
ALTER TABLE sis_instalacao ADD FOREIGN KEY (cliente_id) REFERENCES sis_cliente (id);

ALTER TABLE sis_instalacao ADD FOREIGN KEY (tecnico_id) REFERENCES sis_tecnico (id);