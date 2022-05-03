import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { publicFetch } from '../util/fetcher'

import Layout from '../components/layout'
import QuestionWrapper from '../components/question/question-wrapper'
import QuestionStats from '../components/question/question-stats'
import QuestionSummary from '../components/question/question-summary'
import PageTitle from '../components/page-title'
import ButtonGroup from '../components/button-group'
import { Spinner } from '../components/icons'
import SearchBtn from '../components/search-btn'

const search = () => {
  const router = useRouter()
  const [search, setSearch] = useState('')
  const [questions, setQuestions] = useState(null)
  
  const [sortType, setSortType] = useState('Votes')

  const fetchQuestion = async () => {
    const { data } = await publicFetch.get('/question')
    let result = []
    data.map((e)=>{
    if(e.title.toString().toLowerCase().includes(search.toString().toLowerCase()) || e.text.toString().toLowerCase().includes(search.toString().toLowerCase())){
      result=[...result,e]
    }
    })
    setQuestions(result)
  }
  useEffect(() => {
      fetchQuestion();
  }, [search])

  const handleSorting = () => {
    switch (sortType) {
      case 'Votes':
        return (a, b) => b.score - a.score
      case 'Views':
        return (a, b) => b.views - a.views
      case 'Newest':
        return (a, b) => new Date(b.created) - new Date(a.created)
      case 'Oldest':
        return (a, b) => new Date(a.created) - new Date(b.created)
      default:
        break
    }
  }

  return (
    <Layout>
      <Head>
        <title>
          {router.query.title ? router.query.title : 'Questions'} - Beyond
        </title>
      </Head>

      <PageTitle title={search===''?'Search':'Search : '+ search } button borderBottom={false} />
      <SearchBtn setSearch={setSearch} />
      <ButtonGroup
        borderBottom
        buttons={['Votes', 'Views', 'Newest', 'Oldest']}
        selected={sortType}
        setSelected={setSortType}
      />

      {!questions && (
        <div className="loading">
          <Spinner />
        </div>
      )}

      {questions
        ?.sort(handleSorting())
        .map(
          ({
            id,
            votes,
            answers,
            views,
            title,
            text,
            tags,
            author,
            created
          }) => (
            <QuestionWrapper key={id}>
              <QuestionStats
                voteCount={votes.length}
                answerCount={answers.length}
                view={views}
              />
              <QuestionSummary
                id={id}
                title={title}
                tags={tags}
                author={author}
                createdTime={created}
              >
                {text}
              </QuestionSummary>
            </QuestionWrapper>
          )
        )}
    </Layout>
  )
}

export default search
