import Layout from './Layout'

const NotFoundPage: React.FC = () => {
  return (
    <Layout id='not-found-page' title='Page Not Found'>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%'
        }}
      >
        <h1>404 but...</h1>
        <img
          src='/this-is-fine-404.gif'
          alt='This is fine'
          style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
      </div>
    </Layout>
  )
}

export default NotFoundPage
