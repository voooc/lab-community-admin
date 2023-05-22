export default function EnumUtil(definition) {
  const map = {};
  for (const enumName of Object.keys(definition)) {
    const value = definition[enumName];
    map[enumName] = value;
  }
}
