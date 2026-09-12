import { Client, GatewayIntentBits, Events, REST, Routes, SlashCommandBuilder } from 'discord.js'
const client = new Client({ intents: [GatewayIntentBits.Guilds] })
const guildId = '1419010493745725503'
const channelId = '1543209907040297051'
const managers = new Set(['1543209684482396250', '1543209687804158014'])
const commands = [
  new SlashCommandBuilder().setName('teamrole-add').setDescription('Fügt einem Mitglied eine Teamrolle hinzu').addRoleOption(option => option.setName('rolle').setDescription('Teamrolle').setRequired(true)),
  new SlashCommandBuilder().setName('teamrole-remove').setDescription('Entfernt eine Teamrolle von einem Mitglied').addRoleOption(option => option.setName('rolle').setDescription('Teamrolle').setRequired(true)),
].map(command => command.toJSON())

client.once(Events.ClientReady, async c => {
  const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_BOT_TOKEN)
  await rest.put(Routes.applicationGuildCommands(process.env.DISCORD_APPLICATION_ID, guildId), { body: commands })
  await rest.post(Routes.channelMessages(channelId), { body: { content: 'AIO TEAMLISTE ONLINE\nTeamrollen werden hier verwaltet. Website-Sync: https://aiogermany.de/unser-team' } })
  console.log(`[worker] ${c.user.tag} online; slash commands registered; team channel synced`)
})
client.on(Events.InteractionCreate, async interaction => {
  if (!interaction.isChatInputCommand() || !['teamrole-add', 'teamrole-remove'].includes(interaction.commandName)) return
  if (interaction.guildId !== guildId || interaction.channelId !== channelId || !interaction.member?.roles.cache.some(role => managers.has(role.id))) return interaction.reply({ content: 'Keine Berechtigung für diesen Kanal oder Command.', ephemeral: true })
  const role = interaction.options.getRole('rolle', true)
  const member = interaction.guild?.members.cache.get(interaction.user.id)
  if (!member) return interaction.reply({ content: 'Mitglied konnte nicht geladen werden.', ephemeral: true })
  const add = interaction.commandName === 'teamrole-add'
  await member.roles[add ? 'add' : 'remove'](role)
  await interaction.reply(`${add ? 'Hinzugefügt' : 'Entfernt'}: ${role.name}`)
})
if (!process.env.DISCORD_BOT_TOKEN) throw new Error('DISCORD_BOT_TOKEN fehlt')
await client.login(process.env.DISCORD_BOT_TOKEN)
