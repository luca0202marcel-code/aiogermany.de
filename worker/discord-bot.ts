import { Client, GatewayIntentBits, Events } from 'discord.js'
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers] })
const guildId = '1419010493745725503'
const channelId = '1543209907040297051'
const managers = new Set(['1543209684482396250','1543209687804158014'])
client.once(Events.ClientReady, c => console.log(`[worker] ${c.user.tag} online`))
client.on(Events.InteractionCreate, async interaction => {
  if (!interaction.isChatInputCommand() || !['teamrole-add','teamrole-remove'].includes(interaction.commandName)) return
  if (interaction.guildId !== guildId || interaction.channelId !== channelId || !interaction.member?.roles.cache.some(role => managers.has(role.id))) return interaction.reply({content:'Keine Berechtigung für diesen Kanal oder Command.',ephemeral:true})
  const role = interaction.options.getRole('rolle', true)
  const member = interaction.guild?.members.cache.get(interaction.user.id)
  if (!member) return interaction.reply({content:'Mitglied konnte nicht geladen werden.',ephemeral:true})
  const add = interaction.commandName === 'teamrole-add'
  await member.roles[add ? 'add' : 'remove'](role)
  await interaction.reply(`${add ? 'Hinzugefügt' : 'Entfernt'}: ${role.name}`)
})
client.login(process.env.DISCORD_BOT_TOKEN)
