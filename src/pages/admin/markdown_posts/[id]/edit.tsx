import { NextPage } from 'next';
import React from 'react';
import { fetchMarkdownPostApiClient } from '../../../../api/clients/markdownPosts';
import AdminMarkdownPostEditTemplate from '../../../../components/templates/admin/markdown_posts/AdminMarkdownPostEditTemplate';
import { MarkdownPost } from '../../../../types/markdownPost';

type Props = {
  markdownPost: MarkdownPost | null;
};

const AdminMarkdownPostEditPage: NextPage<Props> = ({ markdownPost }) => {
  return <AdminMarkdownPostEditTemplate markdownPost={markdownPost} />;
};

export const getServerSideProps = async context => {
  const id = context.query.id;

  try {
    const markdownPostId = Number(id);
    if (isNaN(markdownPostId)) {
      throw new Error('invalid path parameter');
    }
    const res = await fetchMarkdownPostApiClient(markdownPostId);

    const props: Props = {
      markdownPost: res,
    };

    return { props };
  } catch (e) {
    console.error(e);

    const props: Props = {
      markdownPost: null,
    };

    return { props };
  }
};

export default AdminMarkdownPostEditPage;