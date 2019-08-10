const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {

  //!addrole @Crazy1190 Dog Person
  if (!message.member.hasPermission("MANAGE_ROLES")) return errors.noPerms(message, "MANAGE_ROLES");
  if (args[0] == "!dodajrole") {
    message.reply("Poprawne użycie: !addrole <@oznacznik> <@oznacznik roli>");
    return;
  }
  let Gracz = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if (!gracz) return errors.cantfindUser(message.channel);
  let role = args.join(" ").slice(22);
  if (!role) return message.reply("Specify a role!");
  let Role = message.guild.roles.find(`name`, role);
  if (!Role) return message.reply("Nie znaleziono rangi!");

  if (rMember.roles.has(gRole.id)) return message.reply("Ten gracz ma już tą rolę!");
  await (rMember.addRole(gRole.id));

  try {
    await rMember.send(`po ${gRole.name}`)
  } catch (e) {
    console.log(e.stack);
    message.channel.send(`Poprawnie nadano rolę! <@${rMember.id}>, they have been given the role ${gRole.name}. We tried to DM them, but their DMs are locked.`)
  }
}

module.exports.help = {
  name: "addrole"
}
