export const style = (color = null) => ({
  card: {
    minHeight: 120,
    paddingHorizontal: 12,
    paddingBottom: 12,
    borderRadius: 8,
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
  },
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold'
  },
  subTitle: {
    fontSize: 16,
    color: '#fff',
  }
});

export default style;
