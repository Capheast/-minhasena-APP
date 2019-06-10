export const style = (color = null, border) => ({
  card: {
    minHeight: 120,
    paddingHorizontal: 12,
    paddingBottom: 12,
    borderRadius: border ? 8 : 0,
    marginBottom: 16,
    backgroundColor: color
  },
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  textContainer: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  iconContainer: {
    position: 'absolute',
    right: 0,
    top: 0
  }
});

export default style;
